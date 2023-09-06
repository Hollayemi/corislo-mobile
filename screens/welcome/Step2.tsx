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
      <Image source={require("../../assets/Auth/image2.png")} />
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
        <Image source={require("../../assets/Auth/step1.png")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/Auth/ProgressButton2.png")} />
      </View>
    </SafeAreaView>
  );
}
