import React from "react";
import { FlatList, Text, View } from "react-native";
import ItemsCard from "./ItemsCard";
import { product } from "../tabsHome/data";
import useSWR from "swr";
import { NoRecord } from "../../components/cards/noRecord";

export default function SavedItems() {
    const { data, isLoading } = useSWR("/user/saved-items");
    const saved = data?.data || [];
    console.log(saved);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingHorizontal: "5%",
            }}
        >
            {saved.length > 0 ? (
                <FlatList
                    style={{ marginBottom: 20, flex: 1 }}
                    data={saved}
                    renderItem={({ item, index }: any) => (
                        <ItemsCard {...item} key={index} />
                    )}
                    keyExtractor={(item: any) => item.id}
                />
            ) : (
                <NoRecord />
            )}
        </View>
    );
}
