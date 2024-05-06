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
import LoginValidationSchema from "./schema/login.schema";
import { styles } from "./Step1";
import { loginHandler } from "../../redux/state/slices/auth/Login";
import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useData";

export default function Login({ navigation }: any) {
  const [Disabled, setDisabled] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>();
  const dispatch = useDispatch();
  const { setLoading } = useUserData();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          onSubmit={async (values) => {
            loginHandler(values, navigation, dispatch, null, setLoading);
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
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  label="Email"
                  placeholder="JohnDoe@mail.com"
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
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="*********"
                  label="Password"
                  password
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
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "#2A347E",
                  textAlign: "center",
                  fontFamily: "Poppins_400Regular",
                  marginVertical: 20,
                }}
                onPress={() => navigation.navigate(Routes.ForgetPassword)}
              >
                Forgot Password?
              </Text>
              <View style={{ marginTop: "40%" }}>
                <Button
                  title="Next"
                  onPress={() => handleSubmit()}
                  disabled={!isValid || Disabled}
                />
              </View>
            </>
          )}
        </Formik>
        <Footer login navigation={navigation} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
