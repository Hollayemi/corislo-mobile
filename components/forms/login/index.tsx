import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { style } from "../../../style";
import Button from "../../button";
import Stepper from "react-native-stepper-ui";

const MyComponent = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const content = [
  <MyComponent title="component 1" />,
  <MyComponent title="component 2" />,
  <MyComponent title="component 3" />,
];

export default function Login() {
  const [text, setText] = React.useState("");
  const [active, setActive] = React.useState(0);

  return (
    <View style={{ ...style.container, ...styles.container }}>
      <View style={styles.logo}>
        <Image source={require("../../../assets/logo2.png")} />
      </View>

      <Text style={styles.text}>
        Unlock Your Potential, Register with Corisio Today!
      </Text>

      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => console.log("finished")}
        onNext={() => setActive((p) => p + 1)}
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(newText: any) => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(newText: any) => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(newText: any) => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(newText: any) => setText(newText)}
        defaultValue={text}
      />

      <View style={styles.button}>
        <Button title="Next" onPress={() => console.log("Pressed")} />
        <Text style={styles.btnText}>
          Have an account?{" "}
          <Text style={{ color: "#2A347E", fontWeight: "700" }}>Log In</Text>
        </Text>
      </View>
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
  input: {
    borderRadius: 5,
    backgroundColor: "#EFEFEF",
    color: "#424242",
    fontSize: 15,
    fontWeight: "500",
    padding: 15,
    marginVertical: 15,
  },
  button: {
    marginTop: "20%",
  },
  btnText: {
    color: "#424242",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 20,
  },
});
