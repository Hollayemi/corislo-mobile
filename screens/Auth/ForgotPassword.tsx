import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";
import { Routes } from "../../navigations/routes";
import ForgetPasswordValidationSchema from "./schema/ForgetPassword.schema";
import { styles } from "./Step1";
import fetcher from "../../hooks/useFetch";
import Popup from "../../components/Popup";

export default function Login({ navigation }: any) {
  const [message, setMessage] = React.useState("");
  const [_, setData] = React.useState();
  return (
    <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <Popup info="Verify your email to change your password." />
      <Heading
        description="Lost your password? Don't worry, we've got you covered. Simply provide your registered email address, and we'll help you regain access to your account."
        title="Forgot Password"
      />
      <Formik
        validationSchema={ForgetPasswordValidationSchema}
        initialValues={{
          email: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            await fetcher(
              "https://corislo-backend.onrender.com/api/v1/auth/forgot-password",
              values,
              "POST",
              setMessage,
              setData
            );
          } catch (error: any) {
            console.log("Error : ", error);
            console.warn(error.message);
            return;
          }
          navigation.navigate(Routes.AuthenticationVerify, {
            type: "update",
          });
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
              <Text style={styles.error}>{message ? message : null}</Text>

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
              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#2A347E",
                textAlign: "center",
                fontFamily: "Poppins_500Medium",
                marginVertical: 20,
              }}
              onPress={() => navigation.navigate(Routes.ForgetPassword)}
            >
              Back to Log In
            </Text>
          </>
        )}
      </Formik>
      <Text style={{ color: "#2A347E", fontSize: 15, fontWeight: "500" }}>
        Back to Log In
      </Text>
    </SafeAreaView>
  );
}
