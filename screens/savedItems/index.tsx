import React from "react";
import { FlatList, View } from "react-native";
import ItemsCard from "./ItemsCard";
import { product } from "../tabsHome/data";

export default function SavedItems() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: "5%" }}>
      <FlatList
        style={{ marginBottom: 20, flex: 1 }}
        data={product.filter((item) => item.off !== " ")}
        renderItem={({ item }: any) => <ItemsCard {...item} />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}
