import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";
import { Routes } from "../../navigations/routes";
import Step2ValidationSchema from "./schema/Step2.schema";
import { styles } from "./Step1";

export default function Step2({ navigation }: any) {
  return (
    <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <Heading
        description="We are almost there, just few more steps to go and we are good to go."
        title="Thank you for your Patience"
      />
      <Formik
        validationSchema={Step2ValidationSchema}
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate(Routes.AuthenticationVerify);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
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
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
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
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
            </View>
            <View style={{ marginTop: "40%" }}>
              <Button title="Next" onPress={handleSubmit} disabled={!isValid} />
            </View>
          </>
        )}
      </Formik>
      <Footer />
    </SafeAreaView>
  );
}
