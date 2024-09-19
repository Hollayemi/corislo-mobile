import React from "react";
import { FlatList, View } from "react-native";
import ReviewCard from "../../components/order/OrderCard";
import useSWR from "swr";
import Loader from "../../components/loader";

export default function Review() {
    const { data, isLoading } = useSWR("/user/pending-reviews");
    const products = data ? data.data : [];
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
            {!isLoading ? (
                <FlatList
                    data={products}
                    renderItem={({ item, index }) => (
                        <ReviewCard
                            {...{
                                ...item,
                                items: item.storeProducts,
                                prodId: item.storeProducts.prodId,
                                quantity: item.storeProducts.quantity,
                                createdAt: item.createdAt,
                                currStatus: "Completed",
                                orderItemId: item._id,
                                branch: item.branch,
                                store: item.store,
                                orderSlug: item.storeProducts.prodName,
                            }}
                            rating
                            index={index}
                        />
                    )}
                />
            ) : (
                <Loader />
            )}
        </View>
    );
}
