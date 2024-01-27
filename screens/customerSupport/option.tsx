import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type prop = {
  title: string;
  Icon: any;
  desc?: string;
};

export default function Option({ title, Icon, desc }: prop) {
  return (
    <View
      style={{
        padding: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F5F5F5",
        marginVertical: 20,
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#E8EAFF",
          padding: 10,
          borderRadius: 100,
          width: "auto",
          alignItems: "center",
        }}
      >
        {Icon}
      </View>
      <View style={{ flex: 0.7 }}>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            paddingVertical: 5,
            color: "#1F1F1F",
          }}
        >
          {title}
        </Text>
        {desc ? (
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 10,
              color: "#7E7E7E",
              paddingVertical: 5,
            }}
          >
            {desc}
          </Text>
        ) : null}
      </View>
      <AntDesign
        name="right"
        size={24}
        color="black"
        //   style={{ paddingRight: "15%" }}
      />
    </View>
  );
}
