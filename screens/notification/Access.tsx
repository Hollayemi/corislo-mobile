import React from "react";
import { Image, Text, View } from "react-native";
import { Routes } from "../../navigations/routes";

export default function NotificationAccess({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: "5%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Image source={require("../../assets/notification.png")} />
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_600SemiBold",
          fontSize: 25,
          color: "#1F1F1F",
        }}
      >
        Don’t miss out!
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_400Regular",
          fontSize: 15,
          color: "#7C7C7C",
        }}
      >
        Enable push notifications to grant access to receive instant updates on
        your mobile phone notification center about order confirmations,
        exciting promotions, and personalized recommendations.
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_500Medium",
          fontSize: 17,
          color: "#fff",
          borderRadius: 40,
          backgroundColor: "#2A347E",
          padding: "3%",
          width: "100%",
        }}
        onPress={() => {
          navigation.navigate(Routes.notificationList);
        }}
      >
        Enable Push Notification
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_500Medium",
          fontSize: 17,
          color: "#1F1F1F",
          borderRadius: 40,
        }}
      >
        Maybe Later
      </Text>
    </View>
  );
}
