import React from "react";
import { FlatList, Text, View } from "react-native";
import ReviewCard from "../../components/order/OrderCard";

export default function Cancelled(prop: any) {
    const {
        route: { params },
        navigation,
    } = prop;
    const data = params.data;
    // console.log(data, "ss")

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                // paddingHorizontal: "5%",
            }}
        >
            {data.length > 0 ? (
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <ReviewCard
                            {...item}
                            key={index}
                            navigation={navigation}
                        />
                    )}
                    // ListFooterComponent={}
                />
            ) : (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        height: "50%",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "#7E7E7E" }}>No Cancelled Order</Text>
                </View>
            )}
        </View>
    );
}
