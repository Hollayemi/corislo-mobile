import React from "react";
import { FlatList, Text, View } from "react-native";
import VoucherCard from "./VoucherCard";
import { expired } from "./data";

export default function Used() {
  return (
    <View style={{ flex: 1, paddingHorizontal: "5%" }}>
      <FlatList
        data={expired}
        renderItem={({ item }: any) => <VoucherCard {...item} />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}
