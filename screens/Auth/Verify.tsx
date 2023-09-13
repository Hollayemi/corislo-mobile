import React, { useRef, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Button from "../../components/button";
import OTPInput from "../../components/OTP";
import { Routes } from "../../navigations/routes";

export default function Verify({ navigation }: any) {
  const [otp, setOTP] = useState(["", "", "", ""]); // Initialize an array of 4 empty strings
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (text: string, index: number) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    // Auto-focus to the next input field if available
    if (
      index < otp.length - 1 &&
      text.length === 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const checkDisable = otp.includes("");
  const handleSubmit = () => {
    console.log(otp);
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
      <View style={{ paddingBottom: "10%", paddingTop: "30%" }}>
        <OTPInput
          handleInputChange={handleInputChange}
          inputRefs={inputRefs}
          otp={otp}
        />
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
            handleSubmit();
          }}
          title="Verify"
          disabled={checkDisable}
        />
      </View>
    </SafeAreaView>
  );
}
