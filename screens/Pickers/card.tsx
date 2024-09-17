import { Image, StyleSheet, Text, View } from "react-native";

export const PickerCard = ({ item }: any) => {
    return (
        <View style={styles.pickerContainer}>
            <Image
                source={require("../../assets/no-profile.png")}
                style={{ width: 60, height: 60 }}
            />
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.name} numberOfLines={1}>
                    {item.name}
                </Text>
                <Text style={styles.detail}>{item.email || "- - - -"}</Text>
                <Text style={styles.detail}>{item.relationship}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        padding: 16,
        position: "relative",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderColor: "#C5C5C5",
        
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2A347E",
        marginBottom: 3,
    },
    detail: {
        fontSize: 14,
        color: "#555",
    },
});
