"use client";
// import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import useSWR from "swr";
import io from "socket.io-client";
import { useUserData } from "../hooks/useData";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Routes } from "../navigations/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

const { createContext, useEffect, useState } = require("react");

const defaultProvider = {
  staffInfo: {},
  storeInfo: {},
  showOverlay: () => {},
  connection: false,
  overLay: null,
  socket: null,
};
const StoreDataContext = createContext(defaultProvider);

const StoreDataProvider = ({ children }: any) => {
  const { setOverflow } = StoreDataContext();
  // const router = useRouter();
  // const pathname = usePathname();
  const route = useRoute();
  const navigation = useNavigation<any>();

  const [socket, setSocket] = useState(null);
  const [overLay, setOpenOverlay] = useState(null);
  const { userData } = useSelector((state: any) => state.reducer.loginReducer);

  const getPath = route.name;

  const showOverlay = (pageName = null) => {
    if (overLay) {
      setOverflow(false);
      setOpenOverlay(null);
    } else {
      setOverflow(true);
      setOpenOverlay(pageName);
    }
  };

  // useEffect(() => {
  //   if (
  //     !connection &&
  //     getPath[1] !== "store" &&
  //     getPath[2] !== "login"
  //   ) {
  //     router.replace(`/store/login`);
  //   }else{
  //     router.replace(`/store/dashboard`);
  //   }
  // }, [userData, getPath, router]);

  useEffect(async () => {
    if (!socket) {
      let server = "http://localhost:5001";
      if (process.env.NODE_ENV === "production") {
        server = "https://corislo-backend.onrender.com";
      }
      const newSocket = io(server, {
        query: {
          token: await AsyncStorage.getItem("store_token"),
          by: "store_token",
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

  useEffect(async () => {
    const getLocalToken = await AsyncStorage.getItem("store_token");

    if (getLocalToken && userData!.accessToken && getPath === Routes.Login) {
      navigation.navigate(Routes.homeScreen);
    }
  }, [userData, getPath, navigation]);

  const connection = async () => {
    const getLocalToken = await AsyncStorage.getItem("store_token");
    if (getLocalToken) {
      const decodedToken = jwtDecode(getLocalToken); // Decode the JWT token
      const currentTime = Date.now() / 1000; // Get the current time in seconds
      // // Check if the token is still valid based on its expiration time
      return decodedToken.exp! > currentTime;
    }
    return Boolean(getLocalToken);
  };

  // useEffect(() => {
  //   const whiteList = ["login", "register"];
  //   if (
  //     !connection() &&
  //     getPath[1] === "store" &&
  //     !whiteList.includes(getPath[2])
  //   ) {
  //     router.replace(`/store/login`);
  //   }
  // }, [getPath, router]);

  // //
  //
  //
  //
  //
  //data fetching functions

  //
  // fetch staffInfo
  //
  const {
    data: staffInfo,
    error: staffErr,
    isLoading: staffIsLoading,
  } = useSWR(async () => (await connection()) && "/branch/logged-in-staff");
  //
  //
  // fetch storeInfo
  //
  const {
    data: storeInfo,
    error: storeErr,
    isLoading: storeIsLoading,
  } = useSWR(async () => (await connection()) && "/store");
  //

  return (
    <StoreDataContext.Provider
      value={{
        staffInfo: (!staffErr && !staffIsLoading && staffInfo?.data) || {},
        storeInfo: (!storeErr && !storeIsLoading && storeInfo) || {},
        selectedAddress: {},
        connection: connection(),
        showOverlay,
        overLay,
        socket,
      }}
    >
      {children}
    </StoreDataContext.Provider>
  );
};
export const useStoreData = () => useContext(StoreDataContext);

export { StoreDataProvider, StoreDataContext };
