import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigations/routes";

export default function MessageView() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(Routes.chat);
      }}
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/userPics.png")}
          style={{ borderRadius: 200 }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              color: "#2A347E",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Jays
          </Text>
          <Text
            style={{
              marginTop: 2,
              color: "#1f1f1f",
              fontFamily: "Poppins_400Regular",
              fontSize: 10,
              textAlign: "center",
            }}
          >
            Download it
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 16 }}>
        <Text
          style={{
            color: "#1F1F1F",
            fontFamily: "Poppins_500Medium",
            fontSize: 12,
          }}
        >
          11:00am
        </Text>
        <View
          style={{
            backgroundColor: "#2A347E",
            padding: 2,
            width: 20,
            height: 20,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color: "#fff",
              fontSize: 10,
            }}
          >
            1
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
