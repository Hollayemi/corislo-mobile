import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { style } from "../../../style";
// import Stepper from "react-native-stepper-ui";
import Step1 from "./Step1";

const MyComponent = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const content = [
  <Step1 />,
  <MyComponent title="component 2" />,
  <MyComponent title="component 3" />,
];

export default function Login() {
  const [active, setActive] = React.useState(0);

  return (
    <View style={{ ...style.container, ...styles.container }}>
      <View style={styles.logo}>
        <Image source={require("../../../assets/logo2.png")} />
      </View>

      <Text style={styles.text}>
        Unlock Your Potential, Register with Corisio Today!
      </Text>
      <View>
        {/* <Stepper
          active={active}
          content={content}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => console.log("finished")}
          onNext={() => setActive((p) => p + 1)}
          buttonStyle={{
            ...styles.stepperbtn,
            ...{ width: active == 0 ? "100%" : "40%" },
          }}
          buttonTextStyle={styles.stepbtnText}
          stepStyle={styles.stepStyle}
          wrapperStyle={styles.wrapperStyle}
        /> */}
      </View>

      <Text style={styles.btnText}>
        Have an account?{" "}
        <Text style={{ color: "#2A347E", fontWeight: "700" }}>Log In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "10%",
  },
  text: {
    marginVertical: "5%",
    color: "#2A347E",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
  },
  logo: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
  },

  btnText: {
    color: "#424242",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 20,
  },
  stepperbtn: {
    backgroundColor: "#2A347E",
    borderRadius: 10,
    padding: 20,
    alignSelf: "center",
    marginRight: 10,
    marginTop: "20%",
  },
  stepbtnText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  stepStyle: {
    backgroundColor: "rgba(42, 52, 126, 0.8)",
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    // marginHorizontal: "10%",
  },
  wrapperStyle: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
    // width: "100%",
  },
});
