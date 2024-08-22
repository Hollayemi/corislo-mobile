import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Voucher() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: "5%",
        marginHorizontal: "5%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="card" size={18} color="#2A347E" />
        <Text
          style={{
            color: "#2A347E",
            fontSize: 11,
            fontWeight: "600",
            marginLeft: 15,
          }}
        >
          Voucher
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            color: "#1F1F1F",
            fontSize: 10,
            fontWeight: "500",
            marginRight: 15,
          }}
        >
          Click to add or check Voucher
        </Text>
        <Ionicons name="chevron-forward" size={18} color="#2A347E" />
      </View>
    </View>
  );
}

export default Voucher;
