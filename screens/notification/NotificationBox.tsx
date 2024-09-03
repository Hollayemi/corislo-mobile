import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigations/routes";

export default function NotificationBox() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(Routes.notificationDetails);
      }}
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/notificationIcon.png")}
          style={{
            backgroundColor: "#FFE5BB",
            padding: 30,
            borderRadius: 50,
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              fontSize: 13,
              color: "#7C7C7C",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Flash Sale Incoming!
          </Text>
          <Text
            style={{
              marginTop: 2,
              color: "#7C7C7C",
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
            }}
          >
            Brace yourself for an upcoming flash sale at Gourmet Store.
            Unbeatable discounts on selected items for a limited time...
          </Text>
          <Text
            style={{
              marginTop: 1,
              color: "#7C7C7C",
              fontFamily: "Poppins_500Medium",
              fontSize: 8,
            }}
          >
            9:23 PM
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
