import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

export default function Profile() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      <Text>Profile</Text>;
    </SafeAreaView>
  );
}
