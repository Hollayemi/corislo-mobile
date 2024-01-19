import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type prop = {
  name: string;
  type: string;
  last?: boolean;
};

export default function ProfileBox({ last, name, type }: prop) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: last ? "" : "#EAEAEA",
        borderBottomWidth: last ? 0 : 1,
        borderStyle: "solid",
        padding: "5%",
      }}
    >
      <Text
        style={{
          color: name === "Delete Account" ? "#f00" : "#2E2E2E",
          fontFamily: "Poppins_500Medium",
          fontSize: 13,
        }}
      >
        {name}
      </Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color={name === "Delete Account" ? "#f00" : "black"}
      />
    </View>
  );
}
