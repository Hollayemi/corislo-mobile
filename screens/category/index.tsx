import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { category } from "../tabsHome/data";
import ProductCard from "../../components/ProductCard";

export default function Category() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
      <Image
        source={require("../../assets/categoryCover.png")}
        style={{ width: "100%", marginVertical: 20 }}
      />
      <FlatList
        // ListHeaderComponent={}
        contentContainerStyle={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingBottom: 20,
          flexWrap: "wrap",
        }}
        data={category}
        renderItem={({ item }: any) => <ProductCard {...item} noMargin isCategory />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}
