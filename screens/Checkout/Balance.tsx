import React from "react";
import Voucher from "../cart/Voucher";
import { FlatList, Text, View } from "react-native";

export default function Balance() {
  return (
    <>
      <Voucher />
      <Text style={{ color: "#1C2534", fontSize: 15, fontWeight: "600" }}>
        Summary
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
          paddingTop: 15,
        }}
      >
        <Text style={{ color: "#424242", fontSize: 13, fontWeight: "500" }}>
          Total items cost
        </Text>
        <Text style={{ color: "#424242", fontSize: 13, fontWeight: "600" }}>
          ₦85,300
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ color: "#424242", fontSize: 13, fontWeight: "500" }}>
          Saved
        </Text>
        <Text style={{ color: "#FF0C0C", fontSize: 13, fontWeight: "600" }}>
          -₦3,700
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={{ color: "#424242", fontSize: 13, fontWeight: "500" }}>
          Total Way-Billing Fee
        </Text>
        <Text style={{ color: "#424242", fontSize: 13, fontWeight: "600" }}>
          ₦4500
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 15,
          marginBottom: "10%",
        }}
      >
        <Text style={{ color: "#1C2534", fontSize: 15, fontWeight: "600" }}>
          Total
        </Text>
        <Text style={{ color: "#424242", fontSize: 15, fontWeight: "600" }}>
          ₦86,100
        </Text>
      </View>
    </>
  );
}
