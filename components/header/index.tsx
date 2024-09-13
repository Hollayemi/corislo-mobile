import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NativeModules } from "react-native";
import { Routes } from "../../navigations/routes";

const { StatusBarManager } = NativeModules;

type prop = {
    title: any;
    navigation: any;
    app?: boolean;
    noBack?: boolean;
};

export default function Header({ title, navigation, app, noBack }: prop) {
    return (
        <View style={{ ...styles.header }}>
            <View
                style={[
                    styles.titleGroup,
                    { justifyContent: app ? "flex-start" : "space-between" },
                ]}
            >
                {!noBack && <AntDesign
                    name="left"
                    size={20}
                    color="black"
                    style={{ paddingRight: "15%" }}
                    onPress={() => navigation.goBack()}
                />}
                <Text style={styles.title} numberOfLines={1}>
                    {title.prodName || title}
                </Text>
            </View>
            {title.prodName ? (
                <View style={styles.iconGroup}>
                    {/* <AntDesign name="search1" size={24} color="black" />
                  <AntDesign name="shoppingcart" size={24} color="black" /> */}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(Routes.Cart, { title: "Cart" })
                        }
                    >
                        <Image
                            source={require("../../assets/shopping-cart.png")}
                            style={{ width: 27, height: 27 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(Routes.Cart)}
                    >
                        <Image
                            source={require("../../assets/search.png")}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: "4%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderBottomWidth: 1,
        // borderBottomColor: "#eee",
        paddingTop: StatusBarManager.HEIGHT + 20,
        backgroundColor: "#fff",
    },
    iconGroup: {
        flexDirection: "row",
        flex: 0.2,
        justifyContent: "space-between",
    },
    titleGroup: {
        flexDirection: "row",
        flex: 0.5,
    },
    title: {
        color: "#000",
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
    },
});
