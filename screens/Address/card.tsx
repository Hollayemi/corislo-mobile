import { View, Text, StyleSheet } from "react-native";

export const AddressCard = ({ item, icon, isDefault }: any) => {
    const extra = isDefault ? { backgroundColor: "#EDEFFF" } : {};
    return (
        <View style={{ ...styles.pickerContainer, ...extra }}>
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.state}
                </Text>
                <Text
                    style={styles.detail}
                >{`${item.address}, ${item.city}, ${item.state}.`}</Text>
                <Text style={styles.detail}>{item.postal_code}</Text>
            </View>

            {icon}
        </View>
    );
};
const styles = StyleSheet.create({
    pickerContainer: {
        padding: 16,
        position: "relative",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderColor: "#C5C5C5",
        marginHorizontal: 15,
    },
    title: {
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
