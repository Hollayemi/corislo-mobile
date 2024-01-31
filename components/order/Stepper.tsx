import React from "react";
import { Text, View } from "react-native";

type prop = {
  last?: boolean;
  title: string;
  date: string;
  time: string;
  desc: string;
};

export default function Stepper({ last, date, desc, time, title }: prop) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: "5%",
      }}
    >
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 30,
          backgroundColor: "#fff",
          borderColor: last ? "#2A347E" : "#FDB415",
          borderWidth: 7,
          position: "absolute",
          left: 12,
          zIndex: 100,
        }}
      />
      <View
        style={{
          paddingLeft: "5%",
          borderLeftColor: last ? "#fff" : "#7E7E7E",
          borderLeftWidth: 3,
          borderStyle: "dashed",
          paddingBottom: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#1F1F1F",
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#1F1F1F",
              fontSize: 10,
              fontFamily: "Poppins_500Medium",
              marginLeft: 10,
            }}
          >
            {date}
          </Text>
          <Text
            style={{
              color: "#7E7E7E",
              fontSize: 10,
              fontFamily: "Poppins_400Regular",
              marginLeft: 5,
            }}
          >
            At {time}
          </Text>
        </View>
        <Text
          style={{
            color: "#7E7E7E",
            fontSize: 10,
            fontFamily: "Poppins_400Regular",
            marginLeft: 5,
          }}
        >
          {desc}{" "}
        </Text>
      </View>
    </View>
  );
}
