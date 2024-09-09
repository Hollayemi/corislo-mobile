import { StyleSheet, Text, Pressable } from "react-native";

import React from "react";

type prop = {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    IconAfter?: JSX.Element;
    IconBefore?: JSX.Element;
    mystyles?: object;
    textSize?: number;
    textColor?: string;
};

export default function Button({
    onPress,
    title,
    IconAfter,
    IconBefore,
    disabled,
    mystyles,
    textSize,
    textColor,
}: prop) {
    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: disabled ? "#2A347E80" : "#2A347E",
                    ...mystyles,
                },
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={{
                    ...styles.btnText,
                    fontSize: textSize || 15,
                    color: textColor || "#fff",
                }}
                // style={{ ...styles.btnText, ...{ width: fullWidth ? "100%" : null } }}
            >
                {IconBefore ? (
                    <Text style={{ marginRight: 20, flex: 1 }}>
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
    padding: 15,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 60,
  },
  btnText: {
    // maxHeight: 100,

    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    // former fullwidth property
    width: "100%",
  },
});
