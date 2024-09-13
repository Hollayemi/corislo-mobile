import React from "react";
import { FlatList, View } from "react-native";
import ReviewCard from "../../components/order/OrderCard";
import useSWR from "swr";
import Loader from "../../components/loader";

export default function Review() {
    const { data, isLoading } = useSWR("/user/pending-reviews");
    const products = data ? data.data : [];
    console.log(products);
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
            {!isLoading ? (
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <ReviewCard
                            {...{
                                ...item,
                                items: item.storeProducts,
                                quantity: item.storeProducts.quantity,
                                createdAt: item.createdAt,
                                currStatus: "Completed",
                                orderSlug: item.storeProducts.prodName,
                            }}
                            rating
                        />
                    )}
                />
            ) : (
                <Loader />
            )}
        </View>
    );
}
