import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Assuming you're using React Navigation for routing

// Define the prop types
interface PopularAdsProps {
    store: string;
    title: string;
    brief: string;
    image: string;
    url: string;
}

const PopularAd: React.FC<PopularAdsProps> = ({
    store,
    title,
    brief,
    image,
    url,
}) => {
    const navigation = useNavigation(); // Using navigation instead of router

    // Function to truncate brief text
    const mySubstring = (str: string, num: number) => {
        return str?.length > num ? str.substring(0, num) + "..." : str;
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.storeText}>{store}</Text>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.briefText}>{mySubstring(brief, 50)}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}} // Adjust according to your navigation
                >
                    <Text style={styles.buttonText}>Discover Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/demo/popular-ads1.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 162,
        backgroundColor: "#FEF3C7", // Equivalent to bg-yellow-50
        borderRadius: 16,
        padding: 20,
        paddingVertical: 10 ,
        marginHorizontal: 4,
        flexDirection: "row",
    },
    textContainer: {
        flex: 1,
        paddingRight: 16,
        position: "relative",
    },
    storeText: {
        fontSize: 10,
        fontWeight: "bold",
    },
    titleText: {
        fontSize: 18,
        fontWeight: "800",
        marginTop: 12,
    },
    briefText: {
        color: "#EF4444", // Equivalent to text-red-500
        fontSize: 12,
        marginTop: 8,
    },
    button: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    buttonText: {
        fontSize: 10,
        color: "#000",
        textDecorationLine: "underline",
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default PopularAd;
