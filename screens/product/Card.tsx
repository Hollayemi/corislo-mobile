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
              width: 230,
          }}
      >
          <Image
              source={require("../../assets/demo/2.png")}
              style={{ objectFit: "cover", height: 180, width: "100%" }}
          />
          <View style={{ padding: 10 }}>
              <Text
                  style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}
                  numberOfLines={1}
              >
                  {description}
              </Text>
              <Text
                  style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "#1C2534",
                      marginBottom: 10,
                  }}
              >
                  ₦{price}
              </Text>
              <Rating rate={4} size={15} />
          </View>
      </View>
  );
}
