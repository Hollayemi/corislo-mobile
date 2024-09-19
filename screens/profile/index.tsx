import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HomeHeader from "../../navigations/bottomTabNavigation/HomeHeader";
import {
    accountInfo,
    accountManagement,
    accountManagement1,
    notificatiionPrefernce,
    productManagement,
} from "./profileList";
import ProfileBox from "./ProfileBox";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/state/slices/auth/Login";
import { Routes } from "../../navigations/routes";
import { updateUserAccount } from "../../redux/state/slices/users/updateAccount";
import { useUserData } from "../../hooks/useData";

export default function Profile({ navigation }: any) {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(userLogout());
        navigation.navigate(Routes.Welcome);
    };
    const { userInfo } = useUserData() as any;
    const userPref = userInfo.notification_pref;
    return (
        <FlatList
            contentContainerStyle={{
                // padding: "5%",
                // backgroundColor: "#F5F5F5",
                borderRadius: 20,
                overflow: "hidden",
            }}
            style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingHorizontal: "5%",
            }}
            ListHeaderComponent={
                <>
                    <HomeHeader settings />
                    <Text
                        style={{
                            padding: 20,
                            fontFamily: "Poppins_500Medium",
                            fontSize: 13,
                            color: "#464646",
                            backgroundColor: "#fff",
                        }}
                    >
                        Account Info
                    </Text>
                    <View style={styles.rounded}>
                        <FlatList
                            contentContainerStyle={{
                                padding: "5%",
                                backgroundColor: "#F5F5F5",
                            }}
                            // ListHeaderComponent={}
                            data={accountInfo}
                            renderItem={({ item, index }) => (
                                <ProfileBox
                                    {...item}
                                    last={
                                        index === productManagement.length - 1
                                            ? true
                                            : false
                                    }
                                />
                            )}
                        />
                    </View>
                    <Text
                        style={{
                            padding: 20,
                            fontFamily: "Poppins_500Medium",
                            fontSize: 14,
                            color: "#464646",
                            backgroundColor: "#fff",
                        }}
                    >
                        Product Management
                    </Text>
                    <View style={styles.rounded}>
                        <FlatList
                            contentContainerStyle={{}}
                            // ListHeaderComponent={}
                            data={productManagement}
                            renderItem={({ item, index }) => (
                                <ProfileBox
                                    {...item}
                                    last={
                                        index === productManagement.length - 1
                                            ? true
                                            : false
                                    }
                                />
                            )}
                        />
                    </View>
                    <Text
                        style={{
                            padding: 20,
                            fontFamily: "Poppins_500Medium",
                            fontSize: 14,
                            color: "#464646",
                            backgroundColor: "#fff",
                        }}
                    >
                        Account Management
                    </Text>
                    <View style={styles.rounded}>
                        <FlatList
                            contentContainerStyle={{
                                padding: "5%",
                                backgroundColor: "#F5F5F5",
                            }}
                            // ListHeaderComponent={}
                            data={accountManagement}
                            renderItem={({ item, index }) => (
                                <ProfileBox
                                    {...item}
                                    last={
                                        index === productManagement.length - 1
                                            ? true
                                            : false
                                    }
                                />
                            )}
                        />
                    </View>
                    <Text
                        style={{
                            padding: 20,
                            fontFamily: "Poppins_500Medium",
                            fontSize: 14,
                            color: "#464646",
                            backgroundColor: "#fff",
                        }}
                    >
                        Notification Preferences
                    </Text>
                    <View style={styles.rounded}>
                        <FlatList
                            contentContainerStyle={{
                                padding: "5%",
                                backgroundColor: "#F5F5F5",
                            }}
                            // ListHeaderComponent={}
                            data={notificatiionPrefernce}
                            renderItem={({ item, index }: any) => (
                                <ProfileBox
                                    {...item}
                                    last={
                                        index === productManagement.length - 1
                                            ? true
                                            : false
                                    }
                                    isEnabled={userPref[item.key]}
                                    toggleSwitch={() =>
                                        updateUserAccount(
                                            {
                                                notification_pref: {
                                                    ...userPref,
                                                    [item.key]:
                                                        !userPref[item.key],
                                                },
                                            },
                                            dispatch
                                        )
                                    }
                                />
                            )}
                        />
                    </View>
                    <Text
                        style={{
                            padding: 20,
                            fontFamily: "Poppins_500Medium",
                            fontSize: 14,
                            color: "#464646",
                            backgroundColor: "#fff",
                        }}
                    >
                        Account Management
                    </Text>
                    <View style={styles.rounded}>
                        <FlatList
                            contentContainerStyle={{
                                padding: "5%",
                                backgroundColor: "#F5F5F5",
                            }}
                            // ListHeaderComponent={}
                            data={accountManagement1}
                            renderItem={({ item, index }) => (
                                <ProfileBox
                                    {...item}
                                    last={
                                        index === productManagement.length - 1
                                            ? true
                                            : false
                                    }
                                />
                            )}
                        />
                    </View>
                </>
            }
            data={[""]}
            renderItem={() => <></>}
            ListFooterComponent={
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: "#fff",
                        padding: "5%",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "#2E2E2E",
                            fontFamily: "Poppins_500Medium",
                            fontSize: 13,
                        }}
                        onPress={() => logout()}
                    >
                        Log Out
                    </Text>
                    <AntDesign
                        name="logout"
                        size={24}
                        color="black"
                        onPress={() => alert("sdfsd")}
                    />
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    rounded: {
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
    },
});
