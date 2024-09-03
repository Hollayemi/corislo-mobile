import React from "react";
import { Image, Text, View } from "react-native";

export default function Error() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "15%",
        paddingHorizontal: "5%",
      }}
    >
      <View>
        <Image
          source={require("../../assets/error.png")}
          style={{ borderRadius: 150 }}
        />
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 20,
            color: "#1F1F1F",
            marginVertical: 20,
            textAlign: "center",
          }}
        >
          Oops!!! No Signal
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            color: "#7E7E7E",
            textAlign: "center",
          }}
        >
          No internet connection {"\n"} Please try again
        </Text>
      </View>
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
        Change password
      </Text>
    </View>
  );
}
