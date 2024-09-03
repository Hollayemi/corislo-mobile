"use client";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import useSWR from "swr";
import io from "socket.io-client";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Routes } from "../navigations/routes";
import { RootState } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {InitialState} from '../redux/state/slices/auth/Login'

const { createContext, useEffect, useState } = require("react");

const defaultProvider = {
  cartedProds: [],
  savedProds: [],
  following: [],
  cartData: {},
  userInfo: {},
  selectedAddress: {},
  isOffline: true,
  notifications: [],
  loading: false,
  setLoading: () => {},
  socket: null,
  overLay: null,
  showMapScreen: () => {},
  popMap: false,
  temp: {},
  addTemp: () => {},
};
const DataContext = createContext(defaultProvider);

const UserDataProvider = ({ children, setOverflow, setUserInfo }: any) => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [socket, setSocket] = useState(null);
  const [temp, addTemp] = useState({});
  const [overLay, setOpenOverlay] = useState(null);
  const [popMap, setMapPopup] = useState(false);

  const { RootStateuserData } = useSelector(
    (state: any) => state.reducer.loginReducer
  );
  const { userData } = useSelector((state: any) => state.reducer.loginReducer);

  useEffect(() => setOverflow(loading), [loading]);

  const getPath = route.name;
  useEffect(async () => {
    const getLocalToken = await AsyncStorage.getItem("user_token");

    if (getLocalToken && userData?.accessToken && getPath === Routes.Login) {
      navigation.navigate(Routes.homeScreen);
    }
  }, [userData, getPath, navigation]);

  const isOffline = async () => {
    const getLocalToken = await AsyncStorage.getItem("user_token");
    if (getLocalToken) {
      const decodedToken = jwtDecode(getLocalToken); // Decode the JWT token
      const currentTime = Date.now() / 1000; // Get the current time in seconds
      // // Check if the token is still valid based on its expiration time
      return decodedToken!.exp! < currentTime;
    }
    return true;
  };

  // useEffect(() => {
  //   if (getPath[1]) {
  //     if (
  //       isOffline() &&
  //       getPath[1] !== "auth" &&
  //       getPath[1] !== "store" &&
  //       getPath[2] !== "login"
  //     ) {
  //       router.replace(`/auth/login?returnurl=${pathname.substring(1)}`);
  //     }
  //   }
  // }, [userData, getPath, router]);

  useEffect(async () => {
    if (!socket) {
      // let server = "http://localhost:5001";
      let server = "https://corislo-backend.onrender.com";
      if (process.env.NODE_ENV === "production") {
        server = "https://corislo-backend.onrender.com";
      }
      const newSocket = io(server, {
        query: {
          token: await AsyncStorage.getItem("user_token"),
          by: "user_token",
          port: 3033,
        },
      });
      setSocket(newSocket);

      newSocket.on("connect", () => {
        console.log("Socket connected");
      });

      newSocket.on("disconnect", () => {
        console.log("Socket disconnected");
      });

      newSocket.on("roomJoined", ({ room }: any) => {
        console.log(`Successfully joined room: ${room}`);
      });

      newSocket.on("newMessage", (data: any) => {
        console.log(data);
      });
    }

    // Cleanup when the component unmounts
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  //  Overlays
  const showOverlay =
    (pageName = null) =>
    (e: any) => {
      console.log(pageName, overLay);
      if ((overLay && !pageName) || pageName === overLay) {
        setOverflow(false);
        setOpenOverlay(null);
      } else {
        setOverflow(true);
        setOpenOverlay(pageName);
      }
    };

  const showMapScreen = () => {
    console.log("hello");
    if (popMap) {
      setOverflow(false);
      setMapPopup(false);
    } else {
      setOverflow(true);
      setMapPopup(true);
    }
  };

  //
  //
  //
  //
  //
  //data fetching functions
  //
  //
  //
  const {
    data: userInfo,
    error: userErr,
    isLoading: userIsLoading,
  } = useSWR(!isOffline() && "/user/get-account");

  // useEffect(() => {
  //   userInfo &&
  //     !userInfo?.isVerified &&
  //     router.push("/auth/otp-verification?redirected=true");
  // }, []);

  useEffect(() => {
    if (userInfo?.user) {
      setUserInfo(userInfo.user || {});
    }
  }, [userInfo]);

  //
  // fetch userInfo
  //
  const {
    data: notif,
    error: notifErr,
    isLoading: notifIsLoading,
  } = useSWR(!isOffline() && "/user/notification");
  //
  // fetch CARTiNFO
  //
  const {
    data: cartData,
    error: cartErr,
    isLoading: cartIsLoading,
  } = useSWR(!isOffline() && "/user/cart");
  //
  // fetch CARTiNFO
  //
  const {
    data: savedData,
    error: savedErr,
    isLoading: savedIsLoading,
  } = useSWR(!isOffline() && "/user/save-item/prods");

  // fetch stores you follow
  //
  const {
    data: following,
    error: folErr,
    isLoading: folIsLoading,
  } = useSWR(!isOffline() && "/user/following");
  return (
    <DataContext.Provider
      value={{
        cartedProds:
          (!cartErr && !cartIsLoading && cartData?.data?.cartedProds) || [],
        savedProds: (!savedErr && !savedIsLoading && savedData?.data) || [],
        following: (!folErr && !folIsLoading && following?.data) || [],
        cartData: (!cartErr && !cartIsLoading && cartData?.data) || {},
        userInfo: (!userErr && !userIsLoading && userInfo?.user) || {},
        notifications: (!notifErr && !notifIsLoading && notif?.data) || [],
        selectedAddress: {},
        socket,
        loading,
        setLoading: setLoading,
        setOverflow: setOverflow,
        showOverlay: showOverlay,
        showMapScreen: showMapScreen,
        popMap: popMap,
        overLay: overLay,
        isOffline: isOffline(),
        temp,
        addTemp,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export { UserDataProvider, DataContext };
