import React from "react";
import { FlatList, Text, View } from "react-native";
import Stepper from "../../components/order/Stepper";
import ReviewCard from "../../components/order/OrderCard";
import { OrderStatus } from "./data";

export default function Ongoing(prop: any) {
    const {
        navigation,
        route: { params },
    } = prop;
    const data = params.data;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
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
                    <Text style={{ color: "#7E7E7E" }}>No Ongoing Order</Text>
                </View>
            )}
        </View>
    );
}
