import React from "react";
import { View, Text, TextInput } from "react-native";

type prop = {
  placeholder: string;
  password?: boolean;
  Icon: JSX.Element;
  value: string;
  onChange: any;
};

export default function Input({
  placeholder,
  password,
  Icon,
  value,
  onChange,
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
        <Text style={{ fontSize: 11, color: "#7C7C7C" }}>{placeholder}</Text>
        <TextInput
          value={password ? "*".repeat(value.length) : value}
          onChange={onChange}
          style={{
            backgroundColor: "transparent",
            color: "#424242",
            fontSize: 14,
            fontWeight: "500",
          }}
        />
      </View>
      {Icon}
    </View>
  );
}
