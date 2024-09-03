import { View, Text, Platform, Pressable, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type prop = { placeholder: string };

export default function SearchBox({ placeholder }: prop) {
  return (
    <View
      style={{
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#F3F3F3",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginLeft: 9 }}>
        <FontAwesome name="search" size={22} color="#848080" />

        <TextInput
          placeholder={placeholder}
          selectionColor="#848080"
          style={{
            fontFamily: "Poppins_500Medium",
            color: "#848080",
            fontSize: 12,
            flex: 0.98,
          }}
        />
      </View>
    </View>
  );
}
