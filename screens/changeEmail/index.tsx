import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import changeEmailSchema from "./schema/changeEmail.schema";
import { styles } from "../Auth/Step1";
import { Routes } from "../../navigations/routes";
import { resendOtp } from "../../redux/state/slices/auth/otp";
import { useDispatch } from "react-redux";
import OTPInput from "../../components/OTP";
import { changeEmailHandler } from "../../redux/state/slices/auth/changeEmail";

export default function ChangeEmail({ navigation }: any) {
    const dispatch = useDispatch();
    const [otp, setOTP] = useState(["", "", "", "", "", ""]); // Initialize an array of 4 empty strings
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const checkDisable = otp.includes("");
    return (
        <Formik
            validationSchema={changeEmailSchema}
            initialValues={{
                password: "",
                email: "",
                confirmEmail: "",
            }}
            onSubmit={async (values) => {
                console.log(values);
                resendOtp(
                    {
                        email: values.email,
                        action: {
                            to: "change-email",
                            account: "user",
                        },
                    },
                    dispatch
                );
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
                <View
                    style={{
                        paddingHorizontal: "5%",
                        paddingBottom: "5%",
                        backgroundColor: "#fff",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <ScrollView style={{ height: "80%" }}>
                        <Text
                            style={{
                                fontFamily: "Poppins_500Medium",
                                fontSize: 14,
                                marginVertical: 10,
                            }}
                        >
                            Your Password
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
                            }}
                        >
                            <TextInput
                                placeholder="Enter your password"
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
                                fontSize: 14,
                                marginVertical: 10,
                                marginTop: 30,
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
                                placeholder="Enter the new email"
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
                                selectionColor={"#1f1f1f"}
                            />
                        </View>
                        {errors.email && touched.email && (
                            <Text style={styles.error}>{errors.email}</Text>
                        )}
                        <Text
                            style={{
                                fontFamily: "Poppins_500Medium",
                                fontSize: 14,
                                marginVertical: 10,
                                marginTop: 30,
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
                                placeholder="Confirm the new email"
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
                                selectionColor={"#1f1f1f"}
                            />
                        </View>
                        {errors.confirmEmail && touched.confirmEmail && (
                            <Text style={styles.error}>
                                {errors.confirmEmail}
                            </Text>
                        )}

                        <Text
                            style={{
                                backgroundColor: !isValid
                                    ? "#A3AAAE"
                                    : "#2A347E",
                                color: "#fff",
                                width: 120,
                                marginTop: 30,
                                textAlign: "center",
                                fontSize: 18,
                                padding: "3%",
                                borderRadius: 50,
                                fontFamily: "Poppins_500Medium",
                            }}
                            disabled={Boolean(errors.confirmEmail)}
                            onPress={() => handleSubmit()}
                        >
                            Get Otp
                        </Text>
                        <View style={{ marginTop: 30 }}>
                            <OTPInput
                                inputRefs={inputRefs}
                                otp={otp}
                                setOTP={setOTP}
                                gray={Boolean(errors.confirmEmail)}
                            />
                        </View>
                    </ScrollView>
                    {checkDisable ? null : (
                        <Text
                            style={{
                                backgroundColor: !isValid
                                    ? "#A3AAAE"
                                    : "#2A347E",
                                color: "#fff",
                                marginTop: 30,
                                textAlign: "center",
                                fontSize: 18,
                                padding: "4%",
                                borderRadius: 50,
                                fontFamily: "Poppins_500Medium",
                            }}
                            disabled={!isValid}
                            onPress={() => {
                                changeEmailHandler(
                                    {
                                        newEmailAddress: values.email,
                                        password: values.password,
                                        otp: otp.join(""),
                                    },
                                    dispatch,
                                    navigation
                                );
                            }}
                        >
                            Save Changes
                        </Text>
                    )}
                </View>
            )}
        </Formik>
    );
}
