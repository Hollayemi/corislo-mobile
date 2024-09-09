import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Search from "../../components/search";
import ProductCard from "../../components/ProductCard";
import { category, product } from "./data";
import useSWR from "swr";
import useSWRWithCoordinates from "../../hooks/fetchWithCoordinates";
import { useUserData } from "../../hooks/useData";
import CategoryCard from "../../components/ProductCard/categoryCard";
import Loader from "../../components/loader";
import PopularAd from "../../components/ProductCard/ads";

export default function Home({ navigation }: any) {
    const { userInfo } = useUserData() as any;
    const { data: ProductData, isLoading } = useSWRWithCoordinates(
        "/products?limit=20"
    ) as any;

    // get categories
    const { data: cateDate, isLoading: cateLoading } = useSWR(
        "/corisio/all-categories"
    );
    const categories = cateDate ? cateDate.data : [];

    // get popular products
    const { data: popuProd, isLoading: popularLoading } = useSWR(
        "/home/popular-products"
    );
    const popular = popuProd ? popuProd.data : [];

    // get popular ads
    const { data: popuAds, isLoading: popularAdsLoading } = useSWR("/home/ads");
    const popularAds = popuAds ? popuAds.data : [];

    return (
        <>
            {ProductData?.data?.result ? (
                <FlatList
                    style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        paddingHorizontal: "5%",
                    }}
                    ListHeaderComponent={
                        <View style={{ paddingTop: 10 }}>
                            <Search placeholder="What are you looking for?" />
                            <Image
                                source={require("../../assets/productOff.png")}
                                style={{
                                    width: "100%",
                                    marginVertical: 20,
                                    borderRadius: 10,
                                }}
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
                                style={{ marginBottom: 5, flex: 1 }}
                                horizontal
                                data={categories}
                                renderItem={({ item }: any) => (
                                    <CategoryCard {...item} />
                                )}
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
                                style={{ marginBottom: 0, flex: 1 }}
                                horizontal
                                data={product.filter(
                                    (item) => item.type === "flash"
                                )}
                                renderItem={({ item }: any) => (
                                    <ProductCard {...item} />
                                )}
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
                                data={popularAds}
                                renderItem={({ item }: any) => (
                                    <PopularAd {...item} />
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
                                data={popular}
                                renderItem={({ item }: any) => (
                                    <ProductCard {...item.product} />
                                )}
                                keyExtractor={(item: any) => item._id}
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
                        </View>
                    }
                    contentContainerStyle={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        paddingBottom: 20,
                        flexWrap: "wrap",
                    }}
                    // data={product.filter((item) => item.type !== "flash")}
                    data={ProductData?.data?.result}
                    renderItem={({ item, index }: any) => (
                        <ProductCard
                            {...item}
                            index={index}
                            key={index}
                            noMargin
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={(item: any) => item._id}
                />
            ) : (
                <View
                    style={{
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Loader />
                </View>
            )}
        </>
    );
}
