import React from "react";
import { Image, Text, View } from "react-native";

type prop = {
    icon?: string;
    label: string;
};

function CategoryCard({ label, icon }: prop) {
   
    return (
        
        <View
            style={{
                marginVertical: 10,
                position: "relative",
                // flexBasis: category ? "23%" : "30%",
                maxWidth: 80,
                minWidth: 80,
                minHeight: 100,
                marginHorizontal: 8,

                alignItems: "center",
            }}
        >
            <View style={{ backgroundColor: "#eee5", borderRadius: 100, padding: 3, }}>
                <Image
                    source={{ uri: icon }}
                    style={{
                        minWidth: "auto",
                        minHeight: "auto",
                        // minHeight: 100,
                        objectFit: "fill",
                        borderRadius: 100,
                        width: 80,
                        height: 80,
                        zIndex: -1,
                    }}
                />
            </View>
            <Text
                style={{
                    color: "#595959",
                    fontSize: 12,
                    fontFamily: "Poppins_500Medium",
                    // flexWrap: "wrap",
                    marginTop: 10,
                    textAlign: "center",
                }}
            >
                {label}
            </Text>
        </View>
    );
}

export default CategoryCard;
