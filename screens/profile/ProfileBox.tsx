import React from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
type prop = {
    name: string;
    type: string;
    last?: boolean;
    to?: string;
    toggleSwitch?: any;
    isEnabled?: any;
};

export default function ProfileBox({
    last,
    name,
    type,
    to,
    toggleSwitch,
    isEnabled,
}: prop) {
    const navigation = useNavigation<any>();

    return (
        <Pressable
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: last ? "" : "#EAEAEA",
                borderBottomWidth: last ? 0 : 1,
                borderStyle: "solid",
                padding: "5%",
            }}
            onPress={() => (to ? navigation.navigate(to!) : null)}
        >
            <Text
                style={{
                    color: name === "Delete Account" ? "#f00" : "#2E2E2E",
                    fontFamily: "Poppins_500Medium",
                    fontSize: 13,
                }}
            >
                {name}
            </Text>
            {type === "link" ? (
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color={name === "Delete Account" ? "#f00" : "black"}
                />
            ) : (
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }} // Color of the track (background)
                    thumbColor={isEnabled ? "#0147CD" : "#f4f3f4"} // Color of the thumb (toggle)
                    ios_backgroundColor="#3e3e3e" // Background color on iOS
                    onValueChange={toggleSwitch} // Callback function for value change
                    value={isEnabled} // Current value of the switch (on/off)
                    style={{ height: 10 }}
                    
                />
            )}
        </Pressable>
    );
}
