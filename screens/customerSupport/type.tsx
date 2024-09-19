import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type prop = {
    title: string;
    Icon: any;
};

export default function Type({ title, Icon }: prop) {
    return (
        <View
            style={{
                padding: 13,
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "#E8EAFF",
                    width: 60,
                    height: 60,
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius: 100,
                    alignItems: "center",
                }}
            >
                {Icon}
            </View>
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Poppins_400Regular",
                    fontSize: 10,
                    maxWidth: 90,
                    paddingVertical: 5,
                }}
            >
                {title}
            </Text>
        </View>
    );
}
