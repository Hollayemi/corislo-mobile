import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Search from "../../components/search";
import ProductCard from "../../components/ProductCard";
import { category, product } from "./data";

export default function Home() {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: "5%" }}
      ListHeaderComponent={
        <>
          <Search placeholder="What are you looking for?" />
          <Image
            source={require("../../assets/productOff.png")}
            style={{ width: "100%", marginVertical: 20 }}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Top Sub-Categories
          </Text>
          <FlatList
            style={{ marginBottom: 20, flex: 1 }}
            horizontal
            data={category.slice(0, 8)}
            renderItem={({ item }: any) => <ProductCard {...item} />}
            keyExtractor={(item: any) => item.id}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Flash Sales
          </Text>
          <FlatList
            style={{ marginBottom: 20, flex: 1 }}
            horizontal
            data={product.filter((item) => item.type === "flash")}
            renderItem={({ item }: any) => <ProductCard {...item} />}
            keyExtractor={(item: any) => item.id}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Popular Ads
          </Text>
          <FlatList
            style={{ marginBottom: 20, flex: 1 }}
            horizontal
            data={[0, 1]}
            renderItem={() => (
              <Image
                source={require("../../assets/popularAds.png")}
                style={{
                  marginBottom: 10,
                  marginRight: 20,
                }}
              />
            )}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Popular Products
          </Text>
          <FlatList
            style={{ marginBottom: 20, flex: 1 }}
            horizontal
            data={product.filter((item) => item.type !== "flash").slice(0, 4)}
            renderItem={({ item }: any) => <ProductCard {...item} />}
            keyExtractor={(item: any) => item.id}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Products
          </Text>
        </>
      }
      contentContainerStyle={{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: 20,
        flexWrap: "wrap",
      }}
      data={product.filter((item) => item.type !== "flash")}
      renderItem={({ item }: any) => <ProductCard {...item} noMargin />}
      keyExtractor={(item: any) => item.id}
    />
  );
}
