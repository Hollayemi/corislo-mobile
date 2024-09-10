import {
    View,
    Text,
    Platform,
    Pressable,
    TextInput,
    Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type prop = {
    placeholder: string;
    value: string;
    onChange: any;
    mystyles?: any;
};

export default function SearchBox({ placeholder, value, onChange }: prop) {
    return (
        <View
            style={{
                borderRadius: 50,
                padding: 8,
                backgroundColor: "#F3F3F3",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginLeft: 9,
                }}
            >
                <FontAwesome name="search" size={22} color="#848080" />

                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    selectionColor="#848080"
                    style={{
                        fontFamily: "Poppins_500Medium",
                        color: "#848080",
                        fontSize: 12,
                        flex: 0.98,
                    }}
                />
            </View>
        </View>
    );
}

export function SearchBox2({ placeholder, value, onChange, mystyles }: prop) {
    return (
        <View
            style={{
                borderRadius: 50,
                padding: 13,
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                ...mystyles,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginLeft: 9,
                }}
            >
                <TextInput
                    placeholder={placeholder}
                    selectionColor="#848080"
                    value={value}
                    onChange={onChange}
                    style={{
                        fontFamily: "Poppins_500Medium",
                        color: "#000",
                        fontSize: 15,
                        flex: 0.98,
                        paddingLeft: 10,
                    }}
                />
                <Image
                    source={require("../../assets/search.png")}
                    style={{ width: 25, height: 25 }}
                />
            </View>
        </View>
    );
}
