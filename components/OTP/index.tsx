import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

type prop = {
  otp: string[];
  inputRefs: React.MutableRefObject<(TextInput | null)[]>;
  handleInputChange: (text: string, index: number) => void;
};

const OTPInput: React.FC<prop> = ({ otp, inputRefs, handleInputChange }) => {
  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={styles.input}
          onChangeText={(text) => handleInputChange(text, index)}
          value={value}
          maxLength={1}
          keyboardType="numeric"
          selectTextOnFocus
          secureTextEntry
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: "#2A347E",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    margin: 5,
  },
});

export default OTPInput;
