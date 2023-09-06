import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Step1 from "./Step1";

export default function Auth() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Step1 />
    </SafeAreaView>
  );
}
