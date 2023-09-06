import React from "react";
import { View, Image, Text } from "react-native";

type prop = {
  title: string;
  description: string;
  show?: boolean;
};

export default function Heading({ description, title, show }: prop) {
  return (
    <View>
      <Image
        source={require("../../assets/logo2.png")}
        style={{ marginVertical: "5%" }}
      />
      {show ? null : (
        <>
          <Text style={{ color: "#2A347E", fontWeight: "700", fontSize: 22 }}>
            {title}
          </Text>
          <Text
            style={{
              color: "#000",
              marginTop: "3%",
              width: "75%",
              lineHeight: 18,
              fontSize: 13,
            }}
          >
            {description}
          </Text>
        </>
      )}
    </View>
  );
}
