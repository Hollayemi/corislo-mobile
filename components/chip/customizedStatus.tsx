import React from "react";
import { View, StyleSheet } from "react-native";
import Chip from "./"; // Your custom Chip component

// Status mapping object
export const statusObj = [
    { title: "unpaid", color: "warning" },
    { title: "paid", color: "warning" },
    { title: "processing", color: "success" },
    { title: "out_for_delivery", color: "primary" },
    { title: "pickable", color: "primary" },
    { title: "completed", color: "success" },
    { title: "active", color: "success" },
    { title: "inactive", color: "error" },
    { title: "pending", color: "info" },
    { title: "refunded", color: "secondary" },
    { title: "cancelled", color: "error" },
];

// CustomizeStatus component
interface CustomizeStatusProps {
    text: string;
    size?: "small" | "medium" | "large";
}

export const CustomizeStatus = ({ text, size }: CustomizeStatusProps) => {
    // Find the matching status from the statusObj
    const status = statusObj.find(
        (e) => e.title === text.replace(/ /g, "_").toLowerCase()
    );

    return (
        <View style={styles.container}>
            <Chip
                rounded
                size={size || "small"}
                skin="light"
                color={status?.color || "info"}
                sx={{
                    paddingVertical:
                        size === "small" ? 2 : size === "medium" ? 4 : 6,
                }}
            >
                {status?.title.replace(/_/g, " ").toUpperCase()}
            </Chip>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        flexShrink: 0,
    },
});

export default CustomizeStatus;
