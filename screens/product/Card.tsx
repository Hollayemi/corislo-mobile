import React from "react";
import { View, Image, Text } from "react-native";
import { Similar } from "./data";
import Rating from "../../components/rating";

export default function Card({ price, rating, description }: Similar) {
  return (
    <View
      style={{
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E6E6E6",
        marginLeft: 20,
        width: 250,
      }}
    >
      <Image
        source={require("../../assets/icon.png")}
        style={{ objectFit: "cover", height: 200, width: "100%" }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 13, fontWeight: "500", marginVertical: 15 }}>
          {description}
        </Text>
        <Rating rate={4} small />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "#1C2534",
            marginTop: 10,
          }}
        >
          ₦{price}
        </Text>
      </View>
    </View>
  );
}
