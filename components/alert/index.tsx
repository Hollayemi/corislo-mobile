import React from "react";
import { Text, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type prop = {
  label: string;
  onPress?: () => void;
  type: "warning" | "action";
};

export default function Alert({ label, onPress, type }: prop) {
  const color = type == "warning" ? "#1F1F1F" : "#2A347E";
  const backgroundColor = type == "warning" ? "#FFEEE1" : "#EDEFFF";

  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 0.9,
        }}
      >
        <Ionicons
          name={type == "warning" ? "warning" : "card"}
          size={18}
          color={type == "warning" ? "#ED6C0E" : "#2A347E"}
        />
        <Text style={{ fontSize: 12, marginLeft: 15, color: color }}>
          {label}
        </Text>
      </View>
      {onPress ? (
        <Ionicons name="chevron-forward" size={18} color="#28303F" />
      ) : null}
    </Pressable>
  );
}
