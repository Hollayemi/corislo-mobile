import React from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";

export default function Step1() {
  const [text, setText] = React.useState("");
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    //handler to get device Width
    setWidth(Dimensions.get("window").width);
  }, []);
  const percent90 = width - 0.1 * width;
  return (
    <View style={{ marginTop: "10%" }}>
      <TextInput
        style={{ ...styles.input, ...{ width: percent90 } }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    backgroundColor: "#EFEFEF",
    color: "#424242",
    fontSize: 15,
    fontWeight: "500",
    padding: 15,
    marginVertical: 15,
    display: "flex",
    width: "100%",
  },
});
