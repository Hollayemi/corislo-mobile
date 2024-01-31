import React, { useRef, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Button from "../../components/button";
import OTPInput from "../../components/OTP";
import { Routes } from "../../navigations/routes";
import { styles } from "./Step1";
import fetcher from "../../hooks/useFetch";

export default function Verify({ navigation, route }: any) {
  const { type } = route.params;
  console.log(type);

  const [otp, setOTP] = useState(["", "", "", ""]); // Initialize an array of 4 empty strings
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [message, setMessage] = React.useState("");
  const [_, setData] = React.useState();

  const checkDisable = otp.includes("");
  const handlectreateSubmit = async () => {
    console.log(otp);
    try {
      await fetcher(
        "https://corislo-backend.onrender.com/api/v1/auth/create-account",
        { otp: otp },
        "POST",
        setMessage,
        setData
      );
    } catch (error: any) {
      console.log("Error : ", error);
      console.warn(error.message);
      return;
    }
    navigation.navigate(Routes.AccountCreated);
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
        <Heading
          description="A verification code has been sent to your email, check it and use the code to verify your account."
          title="Verify your email"
        />
      </View>
      <Text style={styles.error}>{message ? message : null}</Text>

      <View style={{ paddingBottom: "10%", paddingTop: "30%" }}>
        <OTPInput inputRefs={inputRefs} otp={otp} setOTP={setOTP} />
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "500",
          color: "#1F1F1F",
          textAlign: "center",
        }}
      >
        <Text>Didn’t receive code? </Text>
        <Text style={{ color: "#2A347E" }}>Resend</Text>
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
        }}
      >
        <Button
          onPress={() => {
            type === "create"
              ? handlectreateSubmit()
              : type === "update"
              ? navigation.navigate(Routes.updatePassword)
              : null;
          }}
          title="Verify Email"
          disabled={checkDisable}
        />
      </View>
    </SafeAreaView>
  );
}
