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
import LoginValidationSchema from "./schema/login.schema";
import { styles } from "./Step1";
import axios from "axios";
// import axios from "../../services/axios";

export default function Login({ navigation }: any) {
  const [Disabled, setDisabled] = React.useState(false);
  return (
    <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <Heading
        description="Your account is still available, just submit you account credentials and you have your account back."
        title="Welcome back."
      />
      <Formik
        validationSchema={LoginValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            console.log("Request Payload:", {
              email: values.email,
              password: values.password,
            });
            setDisabled(true);

            const { data } = await axios.post("auth/login", {
              email: values.email,
              password: values.password,
            });

            console.log("Response Data:", data);

            setDisabled(false);
            navigation.navigate(Routes.ForgetPassword);
          } catch (error) {
            console.error("Error:", error);
            setDisabled(false);
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
              <Input
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                label="Email"
                placeholder="JohnDoe@mail.com"
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
              <Input
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="*********"
                label="Password"
                password
                Icon={
                  errors.password && touched.password ? (
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
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>
            <View style={{ marginTop: "40%" }}>
              <Button
                title="Next"
                onPress={() => handleSubmit()}
                disabled={!isValid || Disabled}
              />
            </View>
          </>
        )}
      </Formik>
      <Footer login navigation={navigation} />
    </SafeAreaView>
  );
}
