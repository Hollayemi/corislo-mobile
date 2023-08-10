import { StyleSheet, Text, Pressable } from "react-native";

import React from "react";

type prop = {
  onPress: () => void;
  title: string;
  fullWidth?: boolean;
  Icon?: JSX.Element;
};

export default function Button({ onPress, title, fullWidth, Icon }: prop) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text
        style={{ ...styles.btnText, ...{ width: fullWidth ? "100%" : null } }}
      >
        {title}
        {Icon ? (
          <Text>
            {"   "}
            {Icon}
          </Text>
        ) : null}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2A347E",
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
});
