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
import ValidatAddressPicker from "./schema/address.schema";
import { saveNewAddress } from "../../redux/state/slices/users/address";
import OptionsMenu from "../../components/option-menu";
import Nigeria from "./nigeria.json";
// import Step1ValidationSchema from "./schema/Step1.schema";

export default function NewAddress({ navigation }: any) {
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
                    validationSchema={ValidatAddressPicker}
                    initialValues={{
                        address: "",
                        state: "",
                        city: "",
                        postal_code: "",
                    }}
                    onSubmit={(values) => {
                        try {
                            saveNewAddress(values, dispatch, navigation);
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
                                    onChangeText={handleChange("address")}
                                    onBlur={handleBlur("address")}
                                    value={values.address}
                                    label="Shipping Address"
                                    placeholder="Enter your shipping address"
                                    Icon={
                                        errors.address && touched.address ? (
                                            <MaterialIcons
                                                name="error-outline"
                                                size={24}
                                                color="red"
                                                style={styles.iconStyle}
                                            />
                                        ) : (
                                            <Ionicons
                                                name="checkmark-circle"
                                                size={24}
                                                color="#233974"
                                                style={styles.iconStyle}
                                            />
                                        )
                                    }
                                />
                                {errors.address && touched.address && (
                                    <Text style={styles.error}>
                                        {errors.address}
                                    </Text>
                                )}
                                <OptionsMenu
                                    Component={() => (
                                        <>
                                            <Input2
                                                onChangeText={handleChange(
                                                    "state"
                                                )}
                                                onBlur={handleBlur("state")}
                                                value={values.state}
                                                others={{ disabled: true }}
                                                placeholder="Select your state"
                                                label="State"
                                                Icon={
                                                    errors.state &&
                                                    touched.state ? (
                                                        <MaterialIcons
                                                            name="error-outline"
                                                            size={24}
                                                            color="red"
                                                            style={
                                                                styles.iconStyle
                                                            }
                                                        />
                                                    ) : (
                                                        <Ionicons
                                                            name="chevron-down"
                                                            size={20}
                                                            style={
                                                                styles.iconStyle
                                                            }
                                                            color="#C5C5C5"
                                                        />
                                                    )
                                                }
                                            />
                                            {errors.state && touched.state && (
                                                <Text style={styles.error}>
                                                    {errors.state}
                                                </Text>
                                            )}
                                        </>
                                    )}
                                    setSelectedValue={handleChange("state")}
                                    options={Nigeria.map((x: any) => {
                                        return { key: x.state, label: x.state };
                                    })}
                                />
                                <OptionsMenu
                                    Component={() => (
                                        <>
                                            <Input2
                                                onChangeText={handleChange(
                                                    "city"
                                                )}
                                                onBlur={handleBlur("city")}
                                                value={values.city}
                                                placeholder="Select Your City"
                                                label="City"
                                                Icon={
                                                    errors.city &&
                                                    touched.city ? (
                                                        <MaterialIcons
                                                            name="error-outline"
                                                            size={24}
                                                            color="red"
                                                            style={
                                                                styles.iconStyle
                                                            }
                                                        />
                                                    ) : (
                                                        <Ionicons
                                                            name="chevron-down"
                                                            size={24}
                                                            style={
                                                                styles.iconStyle
                                                            }
                                                            color="#C5C5C5"
                                                        />
                                                    )
                                                }
                                            />
                                            {errors && touched.city && (
                                                <Text style={styles.error}>
                                                    {errors.city}
                                                </Text>
                                            )}
                                        </>
                                    )}
                                    setSelectedValue={handleChange("city")}
                                    options={Nigeria.filter(
                                        (x: any) =>
                                            x.state === values.state && x.lgas
                                    )[0]?.lgas.map((each: any) => {
                                        console.log(each);
                                        return { key: each, label: each };
                                    })}
                                />
                                <Input2
                                    onChangeText={handleChange("postal_code")}
                                    onBlur={handleBlur("postal_code")}
                                    value={values.postal_code}
                                    // password
                                    label="Zip Code"
                                    others={{ keyboardType: "numeric" }}
                                    placeholder="351108"
                                    Icon={
                                        errors.postal_code &&
                                        touched.postal_code ? (
                                            <MaterialIcons
                                                name="error-outline"
                                                size={24}
                                                color="red"
                                                style={styles.iconStyle}
                                            />
                                        ) : (
                                            <Ionicons
                                                name="checkmark-circle"
                                                size={24}
                                                color="#233974"
                                                style={styles.iconStyle}
                                            />
                                        )
                                    }
                                />
                                {errors.postal_code && touched.postal_code && (
                                    <Text style={styles.error}>
                                        {errors.postal_code}
                                    </Text>
                                )}
                                <View
                                    style={{
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        marginVertical: 30,
                                    }}
                                >
                                    <Ionicons
                                        name="map-outline"
                                        size={20}
                                        color="#233974"
                                        style={{ marginRight: 5 }}
                                    />
                                    <Text
                                        style={{
                                            color: "#2A347E",
                                            fontSize: 16,
                                            borderBottomWidth: 1,
                                            borderStyle: "dashed",
                                        }}
                                        onPress={() => navigation.navigate(Routes.map)}
                                    >
                                        Select Via Map
                                    </Text>
                                </View>
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
    iconStyle: {
        position: "absolute",
        top: 45,
        right: 10,
    },
});
