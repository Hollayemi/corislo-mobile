import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { category } from "../tabsHome/data";
import ProductCard from "../../components/ProductCard";
import useSWR from "swr";
import CategoryCard from "../../components/ProductCard/categoryCard";

export default function Category() {
  const { data, isLoading: cateLoading } = useSWR("/corisio/all-categories");
  const categories = data ? data.data : [];
  return (
      <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
          <Image
              source={require("../../assets/categoryCover.png")}
              style={{ width: "100%", marginVertical: 10, borderRadius: 10 }}
          />
          <FlatList
              // ListHeaderComponent={}
              contentContainerStyle={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingBottom: 20,
                  flexWrap: "wrap",
              }}
              data={categories}
              renderItem={({ item }: any) => (
                  <CategoryCard {...item} noMargin isCategory />
              )}
              keyExtractor={(item: any) => item.id}
          />
      </View>
  );
}
