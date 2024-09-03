import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import changeEmailSchema from "./schema/changeEmail.schema";
import { styles } from "../Auth/Step1";
import { Routes } from "../../navigations/routes";

export default function ChangeEmail({ navigation }: any) {
  return (
    <Formik
      validationSchema={changeEmailSchema}
      initialValues={{
        oldEmail: "",
        email: "",
        confirmEmail: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        navigation.navigate(Routes.AuthenticationVerify, {
          type: "changeEmail",
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
        <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            Email Address
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
              onChangeText={handleChange("oldEmail")}
              onBlur={handleBlur("oldEmail")}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              value={values.oldEmail}
              secureTextEntry={true}
              selectionColor={"#1f1f1f"}
            />
          </View>
          {errors.oldEmail && touched.oldEmail && (
            <Text style={styles.error}>{errors.oldEmail}</Text>
          )}
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            New Email Address
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
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              value={values.email}
              secureTextEntry={true}
              selectionColor={"#1f1f1f"}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            Confirm New Email Address
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
              onChangeText={handleChange("confirmEmail")}
              onBlur={handleBlur("confirmEmail")}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              value={values.confirmEmail}
              secureTextEntry={true}
              selectionColor={"#1f1f1f"}
            />
          </View>
          {errors.confirmEmail && touched.confirmEmail && (
            <Text style={styles.error}>{errors.confirmEmail}</Text>
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
            onPress={() => handleSubmit()}
          >
            Change
          </Text>
        </View>
      )}
    </Formik>
  );
}
