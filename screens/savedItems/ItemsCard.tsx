import React from "react";
import { Image, Text, View } from "react-native";
import Rating from "../../components/rating";
import { AntDesign } from "@expo/vector-icons";

type prop = {
  name: string;
  price?: string | number;
  oldPrice?: string | number;
  rating?: number;
  off?: string;
};

export default function ItemsCard({
  price,
  oldPrice,
  off,
  rating,
  name,
}: prop) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Image
        source={require("../../assets/productImage.png")}
        style={{
          objectFit: "fill",
          borderRadius: 5,
          width: 80,
          height: 80,
        }}
      />
      <View style={{ flex: 0.8 }}>
        <Text
          style={{
            color: "#595959",
            fontSize: 12,
            fontFamily: "Poppins_500Medium",
          }}
        >
          {name.length > 19 ? `${name.substring(0, 20)}...` : name}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "#1C2534",
              fontFamily: "Poppins_700Bold",
              fontSize: 15,
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              color: "#1C2534",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 8,
              textDecorationLine: "line-through",
              marginLeft: 10,
            }}
          >
            {oldPrice}
          </Text>
          <Text
            style={{
              color: "#FF4141",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 8,
              marginLeft: 10,
            }}
          >
            {off}
          </Text>
        </View>
        <Rating rate={4} small />
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <Text
          style={{
            backgroundColor: "#2A347E",
            padding: 10,
            borderRadius: 50,
            color: "#fff",
            fontSize: 10,
            fontFamily: "Poppins_500Medium",
          }}
        >
          Buy Now
        </Text>
        <Text
          style={{
            color: "#FF4141",
            fontSize: 10,
            fontFamily: "Poppins_500Medium",
          }}
        >
          <AntDesign name="delete" size={10} /> Remove
        </Text>
      </View>
    </View>
  );
}
