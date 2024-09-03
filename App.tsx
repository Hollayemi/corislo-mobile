import * as React from "react";
import Navigation from "./navigations/stackNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { SWRConfig } from "swr";
import { URLSearchParams } from "url";
// import { fetcher } from "./services/axios/fetcher";
import * as SplashScreen from "expo-splash-screen";
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { View } from "react-native";
import ToastManager from "toastify-react-native";
import { jsonHeader } from "./redux/state/slices/api/setAuthHeaders";
import martApi from "./redux/state/slices/api/baseApi";
import { AxiosRequestConfig } from "axios";
import queryString from "query-string";

const appendParamsToUrl = (
    url: string,
    newParams: { [key: string]: string | number | null }
): string => {
    // Parse the existing URL into components
    const [baseUrl, queryString] = url.split("?");
    let existingParams = { ...newParams };
    queryString?.split("&").map((x) => {
        const qry = x?.split("=");
        existingParams = { ...existingParams, [qry[0]]: qry[1] };
    });
    let realParam = "?"
    // Add or update parameters
    for (const [key, value] of Object.entries(existingParams)) {
        if (value !== null && value !== undefined) {
            realParam = `${realParam}${key}=${value}&`;
            // existingParams.set(key, value.toString());
        }
    }

    return `${baseUrl}${realParam.toString()}`;
};

SplashScreen.preventAutoHideAsync();
export default function Main() {
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });

    const onLayoutRootView = React.useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <ToastManager />
            <Provider store={store}>
                <SWRConfig
                    value={{
                        refreshInterval: 0,
                        revalidateOnFocus: true,
                        fetcher: async (
                            resource: [string, number | null, number | null],
                            init?: RequestInit
                        ) => {
                            let url = resource[0];
                            console.log(resource, "url");

                            if (url.startsWith("/")) {
                                console.log("here");
                                url = appendParamsToUrl(url, {
                                    lat: resource[1],
                                    lng: resource[2],
                                });
                                
                            }

                            const getToken = await jsonHeader("user");
                            console.log(getToken, "getToken");
                            console.log(url);
                            const res = await martApi.get(
                                url,
                                getToken as AxiosRequestConfig
                            );
                            return res.data;
                        },
                    }}
                >
                    <Navigation />
                </SWRConfig>
            </Provider>
        </View>
    );
}
