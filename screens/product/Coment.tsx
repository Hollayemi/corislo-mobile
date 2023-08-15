import React from "react";
import { Review } from "./data";
import Rating from "../../components/rating";
import { View, Image, Text } from "react-native";

export default function Coment({ comment, date, rating, id }: Review) {
  return (
    <View
      key={id}
      style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
    >
      <Image
        source={require("../../assets/icon.png")}
        style={{
          width: 35,
          height: 35,
          borderRadius: 35 / 2,
          objectFit: "contain",
        }}
      />
      <View>
        <Text
          style={{
            color: "#505050",
            fontSize: 10,
            fontWeight: "400",
            paddingRight: "10%",
          }}
        >
          {comment}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Rating small rate={rating} />

          <Text
            style={{
              fontSize: 8,
              fontWeight: "500",
              marginLeft: 10,
            }}
          >
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
}
