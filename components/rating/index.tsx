import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

type prop = {
  rate: number;
  small?: boolean;
};

export default function Rating({ rate, small }: prop) {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {Array.from({ length: rate }, (_, index) => (
          <MaterialCommunityIcons
            name="star"
            size={small ? 15 : 24}
            color="#FDB415"
            key={index}
          />
        ))}
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {Array.from({ length: 5 - rate }, (_, index) => (
          <MaterialCommunityIcons
            name="star"
            size={small ? 15 : 24}
            color="#A3AAAE"
            key={index}
          />
        ))}
      </View>
    </View>
  );
}
