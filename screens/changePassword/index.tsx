import React from "react";
import {
  SafeAreaView,
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
import Step2ValidationSchema from "./schema/Step2.schema";
import { styles } from "./Step1";
import storage from "../../services/storage";
import fetcher from "../../hooks/useFetch";

export default function Step2({ navigation }: any) {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          onSubmit={async (values) => {
            setDisabled(true);
            try {
              const user1 = await storage.load({
                key: "step1",
              });
              console.log({ ...user1, password: values.password });
              await fetcher(
                "https://corislo-backend.onrender.com/api/v1/auth/create-account",
                { ...user1, password: values.password },
                "POST",
                setMessage,
                setData
              );
              // if (data && !message) {
              if (data) {
                storage.save({
                  key: "otp",
                  data: data.otp,
                });
                storage.save({
                  key: "userToken",
                  data: data.token,
                });
                navigation.navigate(Routes.AuthenticationVerify);
              }
            } catch (error: any) {
              setDisabled(false);
              console.log("Error : ", error);
              console.warn(error.message);
              return;
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
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  label="Password"
                  password
                  placeholder="*********"
                  Icon={
                    errors.password && touched.password ? (
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
                    errors.confirmPassword && touched.confirmPassword ? (
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
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                )}
              </View>
              <View style={{ marginTop: "40%" }}>
                <Button
                  title="Next"
                  onPress={handleSubmit}
                  disabled={!isValid || disabled}
                />
              </View>
            </>
          )}
        </Formik>
        <Footer navigation={navigation} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
