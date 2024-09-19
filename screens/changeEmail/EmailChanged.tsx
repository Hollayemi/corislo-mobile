import React from "react";
import { Image, Text, View } from "react-native";

export default function EmailChanged() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                padding: "7%",
                alignItems: "center",
            }}
        >
            <Image
                source={require("../../assets/emailChanged.png")}
                style={{ width: 300, height: 300 }}
            />
            <Text
                style={{
                    textAlign: "center",
                    // fontFamily: "Poppins_500Medium",
                    fontWeight: 400,
                    fontSize: 28,
                    marginVertical: "5%",
                }}
            >
                Email Address changed {"\n"} Successfullly
            </Text>
            <Text
                style={{
                    backgroundColor: "#2A347E",
                    color: "#fff",
                    marginTop: 50,
                    textAlign: "center",
                    fontSize: 18,
                    padding: "3%",
                    borderRadius: 50,
                    fontFamily: "Poppins_500Medium",
                    width: "100%",
                }}
            >
                Done
            </Text>
        </View>
    );
}
