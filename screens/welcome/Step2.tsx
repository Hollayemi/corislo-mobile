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

const { StatusBarManager } = NativeModules;

export default function Step2({ navigation }: any) {
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
      <Image source={require("../../assets/Welcome/image2.png")} />
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
          Discover Convenience {"\n"}at Your Fingertips
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
          Unlock a world of curated products, seamless transactions, and
          personalized shopping recommendations, all in one app.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/Welcome/step2.png")} />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate(Routes.WelcomeStep3);
        }}
        style={{ alignItems: "center" }}
      >
        <Image source={require("../../assets/Welcome/ProgressButton2.png")} />
      </Pressable>
    </SafeAreaView>
  );
}
