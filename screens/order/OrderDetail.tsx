import React from "react";
import { FlatList, Text, View } from "react-native";
import { itemData } from "../Checkout/data";
import CardRow from "../Checkout/CardRow";
import Balance from "../Checkout/Balance";

export default function OrderDetail() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: "5%" }}>
      <Text
        style={{
          fontSize: 16,
          color: "#464646",
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        Order No: 63728283747483829
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#464646",
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        Order Details
      </Text>
      <FlatList
        data={itemData}
        renderItem={({ item }: any) => (
          <CardRow {...item} checkout={true} order />
        )}
      />
      <Balance />
    </View>
  );
}
