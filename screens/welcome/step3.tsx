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

const { StatusBarManager } = NativeModules;

export default function Step3() {
  return (
    <SafeAreaView
      style={{
        paddingTop:
          Platform.OS == "android" ? StatusBarManager.HEIGHT + 20 : 10,
        paddingHorizontal: "5%",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Pressable>
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
      <Image source={require("../../assets/Auth/image1.png")} />
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
          Welcome to Your{"\n"} Shopping Haven
        </Text>
        <Text
          style={{
            color: "#1F1F1F",
            textAlign: "center",
            fontSize: 14,
            fontWeight: "300",
            letterSpacing: -0.06,
            marginTop: "5%",
          }}
        >
          Step into a realm of endless choices, unbeatable prices, and an
          enriching shopping journey tailored just for you.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/Auth/step3.png")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#FFF",
            fontSize: 9,
            fontWeight: "500",
            backgroundColor: "#2A347E",
            height: 61,
            width: 61,
            borderRadius: 61 / 2,
            textAlign: "center",
          }}
        >
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
}
