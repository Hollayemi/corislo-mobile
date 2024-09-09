import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Platform, NativeModules } from "react-native";
import { Routes } from "../routes";
import { useNavigation } from "@react-navigation/native";
import { useUserData } from "../../hooks/useData";

const { StatusBarManager } = NativeModules;
interface prop {
    category?: boolean;
    settings?: boolean;
}
export default function HomeHeader({ category, settings }: prop) {
    // const [isChecked, setChecked] = React.useState(false);
    const { userInfo } = useUserData() as any;
    const navigation = useNavigation<any>();

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: "5%",
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
                paddingBottom: 10,
                paddingTop: settings
                    ? 20
                    : Platform.OS === "android"
                    ? StatusBarManager.HEIGHT + 20
                    : 0,
                backgroundColor: settings ? "#F5F5F5" : "#fff",
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={{ uri: userInfo.picture }}
                    style={{
                        marginRight: 10,
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        resizeMode: "cover",
                    }}
                />
                <View>
                    <Text style={{ fontWeight: "600", fontSize: 17 }}>
                        {userInfo.username}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 10,
                            color: "#7C7C7C",
                        }}
                    >
                        {userInfo.email}
                    </Text>
                </View>
            </View>

            {settings ? (
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                />
            ) : (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {category ? (
                        <Ionicons
                            style={{ marginRight: 20 }}
                            name="search"
                            size={24}
                            color="#292D32"
                        />
                    ) : null}

                    <TouchableOpacity
                        onPress={() => navigation.navigate(Routes.Cart, { title: "Cart" })}
                    >
                        <Image
                            source={require("../../assets/shopping-cart.png")}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>
                    <Ionicons
                        style={{ marginLeft: 20 }}
                        name="notifications-outline"
                        size={24}
                        color="#292D32"
                        onPress={() => navigation.navigate(Routes.notification)}
                    />
                </View>
            )}
        </View>
    );
}
