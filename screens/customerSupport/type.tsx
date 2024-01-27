import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type prop = {
  title: string;
  Icon: any;
};

export default function Type({ title, Icon }: prop) {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          backgroundColor: "#E8EAFF",
          padding: 10,
          borderRadius: 100,
          width: "auto",
          alignItems: "center",
        }}
      >
        {Icon}
      </View>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_400Regular",
          fontSize: 8,
          paddingVertical: 5,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
