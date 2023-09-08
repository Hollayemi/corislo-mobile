import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
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
          <>
            <View style={{ marginVertical: "7%" }}>
              <Input
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                label="Password"
                password
                placeholder="*********"
                Icon={
                  <Ionicons name="checkmark-circle" size={24} color="#233974" />
                }
              />
              <Input
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                password
                placeholder="*********"
                label="Confirm Password"
                Icon={
                  <Ionicons name="checkmark-circle" size={24} color="#233974" />
                }
              />
            </View>
            <View style={{ marginTop: "40%" }}>
              <Button title="Next" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
      <Footer />
    </SafeAreaView>
  );
}
