import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";
import { Routes } from "../../navigations/routes";
import ForgetPasswordValidationSchema from "./schema/ForgetPassword.schema";
import { styles } from "./Step1";

export default function Login({ navigation }: any) {
  return (
    <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <Heading
        description="Lost your password? Don't worry, we've got you covered. Simply provide your registered email address, and we'll help you regain access to your account."
        title="Forgot Password"
      />
      <Formik
        validationSchema={ForgetPasswordValidationSchema}
        initialValues={{
          email: "",
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
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.email}
                label="User Name"
                placeholder="John Doe"
                Icon={
                  errors.email && touched.email ? (
                    <MaterialIcons name="error-outline" size={24} color="red" />
                  ) : (
                    <Ionicons
                      name="checkmark-circle"
                      size={24}
                      color="#233974"
                    />
                  )
                }
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
            </View>
            <View style={{ marginTop: "40%" }}>
              <Button title="Next" onPress={handleSubmit} disabled={!isValid} />
            </View>
          </>
        )}
      </Formik>
      <Text style={{ color: "#2A347E", fontSize: 15, fontWeight: "500" }}>
        Back to Log In
      </Text>
    </SafeAreaView>
  );
}
