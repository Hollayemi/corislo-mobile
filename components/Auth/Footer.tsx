import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "../button";
import { FontAwesome } from "@expo/vector-icons";
import { Routes } from "../../navigations/routes";

type prop = {
  login?: boolean;
  navigation: any;
};

export default function Footer({ navigation, login }: prop) {
  return (
    <View style={{ alignItems: "center", marginTop: "5%" }}>
      <Text
        style={{
          color: "#424242",
          fontSize: 14,
          fontWeight: "700",
        }}
      >
        <Text>{login ? "Don’t have an account?" : "Have an account?"} </Text>
        <Text
          style={{ color: "#2A347E"}}
          onPress={() =>
            navigation.navigate(
              login ? Routes.AuthenticationStep1 : Routes.Login
            )
          }
        >
          {login ? "Register" : "Log In"}
        </Text>
      </Text>
      <Text
        style={{
          color: "#7C7C7C",
          fontSize: 12,
          letterSpacing: 0.1,
          marginVertical: "5%",
          fontWeight: "700",
        }}
      >
        Or
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {/* EBF6FD */}
        <View
          style={{
            backgroundColor: "#EBF6FD",
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="facebook" size={20} color="#3D6AD6" />
        </View>
        <View
          style={{
            backgroundColor: "#EBF6FD",
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: "5%",
          }}
        >
          <Image source={require("../../assets/google.png")} />
        </View>
        <View
          style={{
            backgroundColor: "#EBF6FD",
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="apple" size={20} color="black" />
        </View>
      </View>
      {login ? null : (
        <Text style={{ textAlign: "center", padding: "5%", fontSize: 12, lineHeight: 20 }}>
          <Text>By continuing, you agree to the </Text>
          <Text style={{ color: "#233974" }}>
            Library Terms {"\n"} Conditions{" "}
          </Text>
          <Text> and </Text>
          <Text style={{ color: "#233974" }}> Privacy Policy</Text>
        </Text>
      )}
    </View>
  );
}
