import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import OTPInput from "../../components/OTP";

export default function VerifyEmail() {
  const [otp, setOTP] = useState(["", "", "", ""]); // Initialize an array of 4 empty strings
  const inputRefs = useRef<(TextInput | null)[]>([]);

  return (
    <View>
      <Heading
        title="Verify your email"
        description="A verification code has been sent to your email, check it and use the code to verify your account, in order to change your password"
      />

      <OTPInput inputRefs={inputRefs} otp={otp} setOTP={setOTP} />
    </View>
  );
}
