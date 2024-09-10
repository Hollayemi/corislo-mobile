import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ModalSelector from "react-native-modal-selector";
import { formatName } from "../../utils/get-initials";

interface optionProps {
    icon?: any;
    options: any;
    selectedValue?: string;
    setSelectedValue: any;
    others?: object;
    Component?: any;
}

const OptionsMenu: React.FC<optionProps> = ({
    icon,
    options,
    selectedValue,
    setSelectedValue,
    others,
    Component,
}) => {

    return (
        <View style={styles.container}>
            <ModalSelector
                data={options}
                {...others}
                initValue="Select something!"
                onChange={(option) => {
                    console.log(option)
                    setSelectedValue(option.key);
                }}
                backdropPressToClose
                cancelText={"Close"}
                touchableActiveOpacity={0}
            >
                <Component />
            </ModalSelector>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        width: "100%",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    selectedText: {
        marginTop: 20,
        fontSize: 16,
    },

    //
    customComponent: {
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
    },
    customPlaceholderText: {
        color: "#888",
        fontSize: 16,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
    },
    // inputIOS: {
    //     // This hides the actual input
    //     height: 0,
    //     width: 0,
    // },
    // inputAndroid: {
    //     // This hides the actual input
    //     height: 0,
    //     width: 0,
    // },
});

export default OptionsMenu;
