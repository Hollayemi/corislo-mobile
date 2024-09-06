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

const isOffline = async () => {
    const getLocalToken = await AsyncStorage.getItem("user_token");
    if (getLocalToken) {
        const decodedToken = jwtDecode(getLocalToken);
        const currentTime = Date.now() / 1000;
        return decodedToken!.exp! < currentTime; // Return true if token is expired
    }
    return true; // Return true if no token (assumed offline)
};

const checkStatus = async () => {
    const offline = await isOffline(); // Await isOffline to resolve the promise
    return !offline; // Return true if online, false if offline
};

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

const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
    // const route = useRoute();
    // const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [connection, setConnection] = useState(null);
    const [socket, setSocket] = useState(null);
    const [temp, addTemp] = useState({});
    const [overLay, setOpenOverlay] = useState(null);
    const [popMap, setMapPopup] = useState(false);
    // const { RootStateuserData } = useSelector(
    //     (state: any) => state.reducer.loginReducer
    // );
    // const { userData } = useSelector(
    //     (state: any) => state.reducer.loginReducer
    // );

    // const getPath = route.name;
    // useEffect(async () => {
    //     const getLocalToken = await AsyncStorage.getItem("user_token");

    //     if (
    //         getLocalToken &&
    //         userData?.accessToken &&
    //         getPath === Routes.Login
    //     ) {
    //         navigation.navigate(Routes.homeScreen);
    //     }
    // }, [userData, getPath, navigation]);

    useEffect(() => {
        const fetchConnectionStatus = async () => {
            const isOnline = await checkStatus();
            setConnection(isOnline);
        };

        fetchConnectionStatus();
    }, []);

    console.log(connection);
    // useEffect(async () => {
    //     if (!socket) {
    //         // let server = "http://localhost:5001";
    //         let server = "https://corislo-backend.onrender.com";
    //         if (process.env.NODE_ENV === "production") {
    //             server = "https://corislo-backend.onrender.com";
    //         }
    //         const newSocket = io(server, {
    //             query: {
    //                 token: await AsyncStorage.getItem("user_token"),
    //                 by: "user_token",
    //                 port: 3033,
    //             },
    //         });
    //         setSocket(newSocket);

    //         newSocket.on("connect", () => {
    //             console.log("Socket connected");
    //         });

    //         newSocket.on("disconnect", () => {
    //             console.log("Socket disconnected");
    //         });

    //         newSocket.on("roomJoined", ({ room }: any) => {
    //             console.log(`Successfully joined room: ${room}`);
    //         });

    //         newSocket.on("newMessage", (data: any) => {
    //             console.log(data);
    //         });
    //     }

    //     // Cleanup when the component unmounts
    //     return () => {
    //         if (socket) {
    //             socket.disconnect();
    //         }
    //     };
    // }, [socket]);

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
    } = useSWR(connection && "/user/get-account");
    // useEffect(() => {
    //   userInfo &&
    //     !userInfo?.isVerified &&
    //     router.push("/auth/otp-verification?redirected=true");
    // }, []);

    // useEffect(() => {
    //     if (userInfo?.user) {
    //         setUserInfo(userInfo.user || {});
    //     }
    // }, [userInfo]);

    //
    // fetch userInfo
    //
    const {
        data: notif,
        error: notifErr,
        isLoading: notifIsLoading,
    } = useSWR(connection && "/user/notification");
    //
    // fetch CARTiNFO
    //
    const {
        data: cartData,
        error: cartErr,
        isLoading: cartIsLoading,
    } = useSWR(connection && "/user/cart");
    //
    // fetch CARTiNFO
    //
    const {
        data: savedData,
        error: savedErr,
        isLoading: savedIsLoading,
    } = useSWR(connection && "/user/save-item/prods");

    // fetch stores you follow
    //
    const {
        data: following,
        error: folErr,
        isLoading: folIsLoading,
    } = useSWR(connection && "/user/following");

    return (
        <DataContext.Provider
            value={{
                cartedProds:
                    (!cartErr &&
                        !cartIsLoading &&
                        cartData?.data?.cartedProds) ||
                    [],
                savedProds:
                    (!savedErr && !savedIsLoading && savedData?.data) || [],
                following: (!folErr && !folIsLoading && following?.data) || [],
                cartData: (!cartErr && !cartIsLoading && cartData?.data) || {},
                userInfo: (!userErr && !userIsLoading && userInfo?.user) || {},
                notifications:
                    (!notifErr && !notifIsLoading && notif?.data) || [],
                selectedAddress: {},
                socket,
                loading,
                setLoading: setLoading,
                popMap: popMap,
                overLay: overLay,
                isOffline: !Boolean(connection),
                temp,
                addTemp,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
export { UserDataProvider, DataContext };
