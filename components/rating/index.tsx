import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

type prop = {
    rate: number;
    size?: number;
    medium?: boolean;
};

export default function Rating({ rate, size = 24 }: prop) {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
                {Array.from({ length: rate }, (_, index) => (
                    <MaterialCommunityIcons
                        name="star"
                        size={size}
                        color="#FDB415"
                        key={index}
                    />
                ))}
            </View>
            <View style={{ flexDirection: "row" }}>
                {Array.from({ length: 5 - rate }, (_, index) => (
                    <MaterialCommunityIcons
                        name="star"
                        size={size}
                        color="#A3AAAE"
                        key={index}
                    />
                ))}
            </View>
        </View>
    );
}
