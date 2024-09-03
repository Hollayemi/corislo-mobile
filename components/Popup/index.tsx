import React from "react";
import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type prop = {
  info: string;
};

export default function Popup({ info }: prop) {
  return (
    <Text
      style={{
        backgroundColor: "#2A347E",
        borderRadius: 10,
        padding: 10,
        marginTop: 50,
        color: "#fff",
        fontSize: 12,
        fontFamily: "Poppins_500Medium",
        position: "absolute",
        left: "10%",
        width: "80%",
        zIndex: 100,
      }}
    >
      <MaterialCommunityIcons name="message-badge" />
      {"  "} {info}
    </Text>
  );
}
