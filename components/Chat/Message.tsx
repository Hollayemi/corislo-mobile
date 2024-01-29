import React from "react";
import { View, Text } from "react-native";

type message = {
  type?: "text" | "image" | "file";
  text?: string;
  date?: string;
  sender?: boolean;
};

function Message({ type, date, sender, text }: message) {
  return (
    <View>
      <View
        style={{
          backgroundColor: sender ? "#EDEFFF" : "#FFF9EC",
          paddingTop: 8,
          paddingHorizontal: 12,
          paddingBottom: 4,
          maxWidth: "70%",
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
          borderBottomEndRadius: sender ? 0 : 12,
          borderBottomStartRadius: sender ? 12 : 0,
          alignSelf: sender ? "flex-end" : "flex-start",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Poppins_500Medium",
            color: "#000",
          }}
        >
          Hello, My name is Junaid, I’m a student of Unilag, can we be friends?
        </Text>
      </View>
      <Text
        style={{
          fontSize: 8,
          fontFamily: "Poppins_500Medium",
          textAlign: sender ? "right" : "left",
          color: "#1F1F1F",
        }}
      >
        Thu 02:00am
      </Text>
    </View>
  );
}

export default Message;
