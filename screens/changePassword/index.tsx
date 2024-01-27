import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import changePasswordSchema from "./schema/changePassword.schema";
import { styles } from "../Auth/Step1";

export default function ChangePhoneNumber() {
  return (
    <Formik
      validationSchema={changePasswordSchema}
      initialValues={{
        oldPassword: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async (values) => {}}
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
        <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            Old Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#E4E4E4",
              paddingHorizontal: "5%",
              marginBottom: 20,
            }}
          >
            <TextInput
              placeholder="**********"
              onChangeText={handleChange("oldPassword")}
              onBlur={handleBlur("oldPassword")}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              value={values.oldPassword}
              secureTextEntry={true}
              selectionColor={"#1f1f1f"}
            />
          </View>
          {errors.oldPassword && touched.oldPassword && (
            <Text style={styles.error}>{errors.oldPassword}</Text>
          )}
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            New Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#E4E4E4",
              paddingHorizontal: "5%",
              // fontSize: 12,
            }}
          >
            <TextInput
              placeholder="**********"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              value={values.password}
              secureTextEntry={true}
              selectionColor={"#1f1f1f"}
            />
          </View>
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            Confirm New Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#E4E4E4",
              paddingHorizontal: "5%",
              // fontSize: 12,
            }}
          >
            <TextInput
              placeholder="Enter the new password"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              value={values.confirmPassword}
              secureTextEntry={true}
              selectionColor={"#1f1f1f"}
            />
          </View>
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
          <Text
            style={{
              backgroundColor: !isValid ? "#A3AAAE" : "#2A347E",

              color: "#fff",
              marginTop: 30,
              textAlign: "center",
              fontSize: 18,
              padding: "5%",
              borderRadius: 50,
              fontFamily: "Poppins_500Medium",
            }}
            disabled={!isValid}
          >
            Change password
          </Text>
        </View>
      )}
    </Formik>
  );
}
