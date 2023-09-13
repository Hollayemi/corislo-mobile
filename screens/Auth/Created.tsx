import React, { useRef, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Button from "../../components/button";
import { Routes } from "../../navigations/routes";

export default function Created({ navigation }: any) {
  const handleSubmit = () => {
    navigation.navigate(Routes.Login);
  };

  return (
    <SafeAreaView
      style={{
        padding: "5%",
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", marginTop: "15%" }}>
        <Heading />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#2A347E", fontSize: 25, fontWeight: "700" }}>
          Account Created
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: "5%",
            marginBottom: "10%",
            textAlign: "center",
            paddingHorizontal: "13%",
          }}
        >
          Welldone, your perseverance has finally paid off, all that is left for
          you is to login.
        </Text>
        <Button
          onPress={() => {
            handleSubmit();
          }}
          title="Verify"
        />
      </View>
    </SafeAreaView>
  );
}
