import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

type prop = {
    rate: number;
    size?: number;
    medium?: boolean;
    setClick?: any;
    myStyles?: object;
};

export default function Rating({ rate, size = 24, setClick, myStyles }: prop) {
    return (
        <View style={{ flexDirection: "row", ...myStyles }}>
            <View style={{ flexDirection: "row" }}>
                {Array.from({ length: rate }, (_, index) => (
                    <MaterialCommunityIcons
                        name="star"
                        size={size}
                        color="#FDB415"
                        key={index}
                        onPress={() => setClick(index + 1)}
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
                        onPress={() => setClick(index + rate + 1)}
                    />
                ))}
            </View>
        </View>
    );
}
