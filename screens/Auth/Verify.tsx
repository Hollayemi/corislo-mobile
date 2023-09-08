import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";

export default function Verify() {
  return (
    <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <Heading
        description="A verification code has been sent to your email, check it and use the code to verify your account."
        title="Verify your email"
      />
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
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
        )}
      </Formik>
      <Footer />
    </SafeAreaView>
  );
}
