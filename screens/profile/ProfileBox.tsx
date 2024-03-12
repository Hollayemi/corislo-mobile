import React from "react";
import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
type prop = {
  name: string;
  type: string;
  last?: boolean;
  to?: string;
};

export default function ProfileBox({ last, name, type, to }: prop) {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: last ? "" : "#EAEAEA",
        borderBottomWidth: last ? 0 : 1,
        borderStyle: "solid",
        padding: "5%",
      }}
      onPress={() => (to ? navigation.navigate(to!) : null)}
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
    </Pressable>
  );
}
