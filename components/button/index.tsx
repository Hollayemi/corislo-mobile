import { StyleSheet, Text, Pressable } from "react-native";

import React from "react";

type prop = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  IconAfter?: JSX.Element;
  IconBefore?: JSX.Element;
};

export default function Button({
  onPress,
  title,
  IconAfter,
  IconBefore,
  disabled,
}: prop) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: disabled ? "#2A347E80" : "#2A347E" },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={styles.btnText}
        // style={{ ...styles.btnText, ...{ width: fullWidth ? "100%" : null } }}
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
    borderRadius: 40,
    padding: 20,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 60,
  },
  btnText: {
    // maxHeight: 100,
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    // former fullwidth property
    width: "100%",
  },
});
