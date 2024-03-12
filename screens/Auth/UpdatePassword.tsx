import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Heading from "../../components/Auth/Heading";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";
import { Routes } from "../../navigations/routes";
import Step2ValidationSchema from "./schema/Step2.schema";
import { styles } from "./Step1";
import Popup from "../../components/Popup";

export default function UpdatePassword({ navigation }: any) {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
        <Heading
          description="Since you have verified your email, all left now is to update your password."
          title="Update Password"
        />
        <Formik
          validationSchema={Step2ValidationSchema}
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values) => {
            setDisabled(true);
            console.log(values);
            navigation.navigate(Routes.homeScreen);
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
                {disabled && (
                  <Popup info="Your password has been successfully reset" />
                )}
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
                  title="Update"
                  onPress={handleSubmit}
                  disabled={!isValid || disabled}
                />
              </View>
            </>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
