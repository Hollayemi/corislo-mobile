import React from "react";
import {
    Platform,
    SafeAreaView,
    Text,
    NativeModules,
    Pressable,
    Image,
    View,
} from "react-native";
import { Routes } from "../../navigations/routes";
// import image1 from "../../assets/Welcome/image1.PNG";

const { StatusBarManager } = NativeModules;

export default function Step1({ navigation }: any) {
    return (
        <SafeAreaView
            style={{
                paddingTop:
                    Platform.OS == "android"
                        ? StatusBarManager.HEIGHT + 20
                        : 10,
                paddingHorizontal: "5%",
                backgroundColor: "#fff",
                flex: 1,
                justifyContent: "space-evenly",
            }}
        >
            <Pressable
                onPress={() => {
                    navigation.navigate(Routes.Authentication);
                }}
            >
                <Text
                    style={{
                        color: "#000",
                        fontSize: 11,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#000",
                        padding: 5,
                        width: 45,
                        textAlign: "center",
                    }}
                >
                    Skip
                </Text>
            </Pressable>
            <Image source={require("../../assets/Welcome/image1.png")} />

            <View>
                <Text
                    style={{
                        color: "#2A347E",
                        textAlign: "center",
                        fontSize: 33,
                        fontWeight: "700",
                        letterSpacing: -0.13,
                    }}
                >
                    Seamless Delivery,{"\n"} Elevated Shopping
                </Text>
                <Text
                    style={{
                        color: "#1F1F1F",
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: "300",
                        lineHeight: 23,
                        letterSpacing: -0.06,
                        marginTop: "3%",
                    }}
                >
                    Experience shopping like never before, connect with trusted
                    sellers, and ensures swift, secure deliveries right to your
                    doorstep
                </Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Image
                    source={require("../../assets/Welcome/step1.png")}
                    style={{ width: 38, height: 22, marginTop: "5%" }}
                />
            </View>
            <Pressable
                onPress={() => {
                    navigation.navigate(Routes.WelcomeStep2);
                }}
                style={{ alignItems: "center" }}
            >
                <Image
                    source={require("../../assets/Welcome/ProgressButton1.png")}
                    style={{ width: 75, height: 75, marginTop: "5%" }}
                />
            </Pressable>
        </SafeAreaView>
    );
}
