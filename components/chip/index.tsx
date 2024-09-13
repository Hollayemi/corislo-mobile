import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";

const useBgColor = () => ({
    deepblue: { backgroundColor: "#2A347E" },
    yellow: { backgroundColor: "#FDB415" },
    successLight: { backgroundColor: "#D1FAE5" },
    errorLight: { backgroundColor: "#FECACA" },
    warningLight: { backgroundColor: "#FEF3C7" },
    infoLight: { backgroundColor: "#DBEAFE" },
});

interface ChipProps {
    sx?: StyleProp<ViewStyle>;

    skin?: "light" | any;
    size?: "medium" | "small" | "large" | any;

    color?:
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "warning"
        | "info"
        | "hidden"
        | string;

    rounded?: boolean;

    children?: React.ReactNode;

    onPress?: () => void;
}

const Chip = ({
    sx,
    skin,
    color,
    rounded = false,
    children,
    onPress,
    ...rest
}: ChipProps) => {
    const bgColors = useBgColor();

    const colors: { [key in NonNullable<ChipProps["color"]>]: ViewStyle } = {
        primary: bgColors.deepblue,
        secondary: bgColors.yellow,
        success: bgColors.successLight,
        error: bgColors.errorLight,
        warning: bgColors.warningLight,
        info: bgColors.infoLight,
        hidden: bgColors.infoLight,
    };

    let backgroundStyle: StyleProp<ViewStyle> = {};
    if (skin === "light" && color && colors[color]) {
        backgroundStyle = colors[color];
    }

    const borderRadius = rounded ? 999 : 4;

    const combinedStyle: StyleProp<ViewStyle> = [
        styles.chip,
        backgroundStyle,
        { borderRadius },
        sx,
    ];

    const textStyle: StyleProp<TextStyle> = [
        styles.text,
        skin === "light" && styles.textLight,
    ];

    if (onPress) {
        return (
            <TouchableOpacity style={combinedStyle} onPress={onPress} {...rest}>
                <Text style={textStyle}>{children}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={combinedStyle} {...rest}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chip: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#000",
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 14,
    },
    textLight: {
        color: "#000",
    },
});

export default Chip;
