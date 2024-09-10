import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import { Input2 } from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/button";
import { Formik } from "formik";
import { Routes } from "../../navigations/routes";
import { addPickupPerson } from "../../redux/state/slices/users/pickup";
import { useDispatch } from "react-redux";
import ValidateNewPicker from "./schema/picker.schema";
// import Step1ValidationSchema from "./schema/Step1.schema";

export default function NewPicker({ navigation }: any) {
    const dispatch = useDispatch();
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView
                style={{
                    paddingHorizontal: "5%",
                    backgroundColor: "#fff",
                    flex: 1,
                }}
            >
                <Formik
                    validationSchema={ValidateNewPicker}
                    initialValues={{
                        name: "",
                        phone: "",
                        email: "",
                        relationship: "",
                    }}
                    onSubmit={(values) => {
                        try {
                            addPickupPerson(values, dispatch, navigation);
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
                        <View
                            style={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <View style={{ marginVertical: "4%" }}>
                                <Input2
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                    value={values.name}
                                    label="Full Name"
                                    placeholder="John Doe"
                                    Icon={
                                        errors.name && touched.name ? (
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
                                {errors.name && touched.name && (
                                    <Text style={styles.error}>
                                        {errors.name}
                                    </Text>
                                )}
                                <Input2
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
                                    <Text style={styles.error}>
                                        {errors.email}
                                    </Text>
                                )}
                                <Input2
                                    onChangeText={handleChange("relationship")}
                                    onBlur={handleBlur("relationship")}
                                    value={values.relationship}
                                    placeholder="Friend"
                                    label="Relationship"
                                    Icon={
                                        errors.relationship &&
                                        touched.relationship ? (
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
                                {errors && touched.relationship && (
                                    <Text style={styles.error}>
                                        {errors.relationship}
                                    </Text>
                                )}
                                <Input2
                                    onChangeText={handleChange("phone")}
                                    onBlur={handleBlur("phone")}
                                    value={values.phone}
                                    // password
                                    label="Phone Number"
                                    placeholder="+234 815 667 0000"
                                    Icon={
                                        errors.phone && touched.phone ? (
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
                                {errors.phone && touched.phone && (
                                    <Text style={styles.error}>
                                        {errors.phone}
                                    </Text>
                                )}
                            </View>
                            <Button
                                title="Save"
                                mystyles={{ marginBottom: 40 }}
                                onPress={handleSubmit}
                                disabled={!isValid}
                            />
                        </View>
                    )}
                </Formik>
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
