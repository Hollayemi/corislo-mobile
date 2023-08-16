import { StyleSheet, Text, Pressable } from "react-native";

import React from "react";

type prop = {
  onPress: () => void;
  title: string;
  fullWidth?: boolean;
  IconAfter?: JSX.Element;
  IconBefore?: JSX.Element;
};

export default function Button({
  onPress,
  title,
  fullWidth,
  IconAfter,
  IconBefore,
}: prop) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text
        style={{ ...styles.btnText, ...{ width: fullWidth ? "100%" : null } }}
      >
        {IconBefore ? (
          <Text>
            {"   "}
            {IconBefore}
          </Text>
        ) : null}{" "}
        {title}{" "}
        {IconAfter ? (
          <Text>
            {"   "}
            {IconAfter}
          </Text>
        ) : null}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2A347E",
    borderRadius: 20,
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
