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
import { ForgotPasswordHandler } from "../../redux/state/slices/auth/forgotpassword";
import { useDispatch } from "react-redux";

export default function ForgetPassword({ navigation }: any) {
  const [message, setMessage] = React.useState("");
  const [_, setData] = React.useState();
  const dispatch = useDispatch();

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
            ForgotPasswordHandler(values.email, navigation, dispatch);
          } catch (error) {
            console.log(error);
          }
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
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                label="Email"
                placeholder="creativebox@gmail.com"
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
              onPress={() => navigation.navigate(Routes.Login)}
            >
              Back to Log In
            </Text>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}
