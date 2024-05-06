import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Heading from "../../components/Auth/Heading";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";
import { Routes } from "../../navigations/routes";
import Step1ValidationSchema from "./schema/Step1.schema";

export default function Step1({ navigation }: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
        <Heading
          description="Let’s get down to know each other, this will enable us to satisft you better."
          title="Let’s get you onboard"
        />
        <Formik
          validationSchema={Step1ValidationSchema}
          initialValues={{
            fullname: "",
            username: "",
            email: "",
            phoneNumber: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate(Routes.AuthenticationStep2, { values });
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
                  onChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                  value={values.fullname}
                  label="Full Name"
                  placeholder="John Doe"
                  Icon={
                    errors.fullname && touched.fullname ? (
                      <MaterialIcons
                        name="error-outline"
                        size={24}
                        color="red"
                      />
                    ) : (
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color="#233974"
                      />
                    )
                  }
                />
                {errors.fullname && touched.fullname && (
                  <Text style={styles.error}>{errors.fullname}</Text>
                )}
                <Input
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="JohnDoe@mail.com"
                  label="Email Address"
                  Icon={
                    errors.email && touched.email ? (
                      <MaterialIcons
                        name="error-outline"
                        size={24}
                        color="red"
                      />
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
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  placeholder="Big Joe"
                  label="Username"
                  Icon={
                    errors.username && touched.username ? (
                      <MaterialIcons
                        name="error-outline"
                        size={24}
                        color="red"
                      />
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
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  // password
                  label="Phone Number"
                  placeholder="+234 815 667 0000"
                  Icon={
                    errors.phoneNumber && touched.phoneNumber ? (
                      <MaterialIcons
                        name="error-outline"
                        size={24}
                        color="red"
                      />
                    ) : (
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color="#233974"
                      />
                    )
                  }
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <Text style={styles.error}>{errors.phoneNumber}</Text>
                )}
              </View>
              <Button title="Next" onPress={handleSubmit} disabled={!isValid} />
            </>
          )}
        </Formik>
        <Footer navigation={navigation} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    color: "#f00",
    paddingLeft: "5%",
  },
});
