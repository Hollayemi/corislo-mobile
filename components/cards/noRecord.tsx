import { Text, View } from "react-native";

export const NoRecord = ({ text }: any) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                height: "80%",
                alignItems: "center",
            }}
        >
            <Text style={{ color: "#7E7E7E" }}>
                {text || "No Record Found"}
            </Text>
        </View>
    );
};
