import React from "react";
import { Image, Text, View } from "react-native";

export default function PhoneNumberChanged() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: "7%",
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/passwordChange.png")} />
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_500Medium",
          marginVertical: "5%",
        }}
      >
        Password changed {"\n"} Successfullly
      </Text>
      <Text
        style={{
          backgroundColor: "#2A347E",
          color: "#fff",
          marginTop: 30,
          textAlign: "center",
          fontSize: 18,
          padding: "5%",
          borderRadius: 50,
          fontFamily: "Poppins_500Medium",
          width: "100%",
        }}
      >
        Done
      </Text>
    </View>
  );
}
