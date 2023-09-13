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

export default function Login({ navigation }: any) {
  return (
    <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <Heading
        description="Your account is still available, just submit you account credentials and you have your account back."
        title="Welcome back."
      />
      <Formik
        validationSchema={LoginValidationSchema}
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate(Routes.ForgetPassword);
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
                value={values.username}
                label="User Name"
                placeholder="John Doe"
                Icon={
                  errors.username && touched.username ? (
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
              {errors.username && touched.username && (
                <Text style={styles.error}>{errors.username}</Text>
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
              <Button title="Next" onPress={handleSubmit} disabled={!isValid} />
            </View>
          </>
        )}
      </Formik>
      <Footer login />
    </SafeAreaView>
  );
}
