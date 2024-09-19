import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import changePasswordSchema from "./schema/changePassword.schema";
import { styles } from "../Auth/Step1";
import { Routes } from "../../navigations/routes";
import { changePasswordHandler } from "../../redux/state/slices/auth/resetPassword";
import { useDispatch } from "react-redux";
import OTPInput from "../../components/OTP";
import { resendOtp } from "../../redux/state/slices/auth/otp";
import { useUserData } from "../../hooks/useData";

export default function ChangePhoneNumber({ navigation }: any) {
    const dispatch = useDispatch();
    const { userInfo } = useUserData() as any;
    const [otp, setOTP] = useState(["", "", "", "", "", ""]); // Initialize an array of 4 empty strings
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const checkDisable = otp.includes("");
    return (
        <Formik
            validationSchema={changePasswordSchema}
            initialValues={{
                oldPassword: "",
                password: "",
                confirmPassword: "",
            }}
            onSubmit={async (values) => {
                console.log(values);
                resendOtp(
                    {
                        email: userInfo.email,
                        action: {
                            to: "change-password",
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
                            <Text style={styles.error}>
                                {errors.oldPassword}
                            </Text>
                        )}
                        <Text
                            style={{
                                fontFamily: "Poppins_500Medium",
                                fontSize: 14,
                                marginTop: 30,
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
                                fontSize: 14,
                                marginTop: 30,
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
                            <Text style={styles.error}>
                                {errors.confirmPassword}
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
                            disabled={Boolean(errors.confirmPassword)}
                            onPress={() => handleSubmit()}
                        >
                            Get Otp
                        </Text>
                        <View style={{ marginTop: 30 }}>
                            <OTPInput
                                inputRefs={inputRefs}
                                otp={otp}
                                setOTP={setOTP}
                                gray={Boolean(errors.confirmPassword)}
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
                                padding: "3%",
                                borderRadius: 50,
                                fontFamily: "Poppins_500Medium",
                            }}
                            disabled={!isValid}
                            onPress={() => {
                              changePasswordHandler(
                                  {
                                      oldPassword: values.oldPassword,
                                      confirmPassword: values.confirmPassword,
                                      newPassword: values.password,
                                      isMobile: true,
                                  },
                                  dispatch,
                                  navigation
                              );
                              
                            }}
                        >
                            Change password
                        </Text>
                    )}
                </View>
            )}
        </Formik>
    );
}
