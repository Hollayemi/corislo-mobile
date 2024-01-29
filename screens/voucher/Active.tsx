import React from "react";
import { FlatList, Text, View } from "react-native";
import { active } from "./data";
import VoucherCard from "./VoucherCard";

export default function Active() {
  return (
    <View style={{ flex: 1, paddingHorizontal: "5%" }}>
      <FlatList
        data={active}
        renderItem={({ item }: any) => <VoucherCard {...item} active />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}
