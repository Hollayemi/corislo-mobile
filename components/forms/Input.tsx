import React from "react";
import { View, Text, TextInput } from "react-native";

type prop = {
  placeholder: string;
  label: string;
  password?: boolean;
  Icon?: JSX.Element;
  value: string;
  onChangeText: any;
  onBlur: any;
};

export default function Input({
  placeholder,
  password,
  Icon,
  value,
  onChangeText,
  label,
  onBlur,
}: prop) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
        backgroundColor: "#F2F3F9",
        padding: "4%",
        marginVertical: 10,
      }}
    >
      <View style={{ flex: 0.95 }}>
        <Text style={{ fontSize: 11, color: "#7C7C7C" }}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          style={{
            backgroundColor: "transparent",
            color: "#424242",
            fontSize: 14,
            fontWeight: "500",
          }}
          secureTextEntry={password ? true : false}
          // keyboardType="email-address"
        />
      </View>
      {Icon}
    </View>
  );
}
