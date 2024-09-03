import React, { useRef, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Button from "../../components/button";
import OTPInput from "../../components/OTP";
import { Routes } from "../../navigations/routes";
import { styles } from "./Step1";
import fetcher from "../../hooks/useFetch";
import { resendOtp, verifyOtp } from "../../redux/state/slices/auth/otp";
import { useDispatch } from "react-redux";

export default function Verify({ navigation, route }: any) {
  const { type, email } = route.params;
  console.log(type);

  const [otp, setOTP] = useState(["", "", "", ""]); // Initialize an array of 4 empty strings
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [message, setMessage] = React.useState("");
  // const [_, setData] = React.useState();
  const dispatch = useDispatch();

  const checkDisable = otp.includes("");
  const handleVerifyOtp = async (otp: string, type: string) => {
    try {
      verifyOtp(otp, navigation, dispatch, type);
    } catch (error) {
      console.log(error);
    }

    setOTP(["", "", "", ""]);
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
        <Text
          style={{ color: "#2A347E" }}
          onPress={() => resendOtp({ email }, dispatch)}
        >
          Resend
        </Text>
      </Text>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
        }}
      >
        <Button
          onPress={() => {
            handleVerifyOtp(otp.join(), type);
          }}
          title="Verify"
          disabled={checkDisable}
        />
      </View>
    </SafeAreaView>
  );
}
