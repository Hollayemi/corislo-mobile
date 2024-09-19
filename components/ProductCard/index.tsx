import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Rating from "../rating";
import { formatDistance } from "../../utils/format";
import { Routes } from "../../navigations/routes";

type prop = {
    image?: string;
    category?: boolean;
    prodName: string;
    price?: string | number;
    oldPrice?: string | number;
    rating?: number;
    off?: string;
    type?: string;
    noMargin?: boolean;
};

function ProductCard(props: object) {
    const {
        off,
        prodPrice,
        prodName,
        type,
        star,
        images,
        noMargin,
        distance,
        navigation,
    } = props as any;
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(Routes.product, props)}
        >
            <View
                style={{
                    marginVertical: 10,
                    position: "relative",
                    // flexBasis: category ? "23%" : "30%",
                    maxWidth: 120,
                    minWidth: 100,
                    minHeight: 100,
                    marginHorizontal: noMargin ? 0 : 10,

                    alignItems: "flex-start",
                }}
            >
                {type === "flash" ? (
                    <Text
                        style={{
                            color: "#ff4141",
                            fontSize: 8,
                            fontWeight: "500",
                            lineHeight: 22,
                            backgroundColor: "#fff",
                            paddingHorizontal: 5,
                            //   paddingVertical: 1,
                            position: "absolute",
                            top: 1,
                            right: 1,
                            borderRadius: 4,
                        }}
                    >
                        {off}%
                    </Text>
                ) : null}
                <Image
                    source={{
                        uri: images
                            ? images[0]
                            : "https://res.cloudinary.com/xmart/image/upload/v1725629754/corisio/demo/22_un3lp1.png",
                    }}
                    style={{
                        minWidth: 100,
                        minHeight: 100,
                        // minHeight: 100,
                        objectFit: "fill",
                        borderRadius: 0,
                        width: "100%",
                        height: "auto",
                        zIndex: -1,
                    }}
                />

                <Text
                    style={{
                        color: "#595959",
                        fontSize: 10,
                        fontFamily: "Poppins_500Medium",
                        // flexWrap: "wrap",
                        marginTop: 10,
                        textAlign: "auto",
                    }}
                    numberOfLines={1}
                    onPress={() => navigation.navigate(Routes.product, props)}
                >
                    {prodName}
                </Text>
                {prodPrice ? (
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text
                            style={{
                                color: "#1C2534",
                                fontSize: 12,
                                fontFamily: "Poppins_700Bold",
                            }}
                        >
                            # {prodPrice}
                        </Text>
                        {type === "flash" ? null : (
                            <Text
                                style={{
                                    color: "#1C2534",
                                    fontSize: 9,
                                    fontFamily: "Poppins_500Medium",
                                    textDecorationLine: "line-through",
                                    marginLeft: 5,
                                }}
                            >
                                # {prodPrice}
                            </Text>
                        )}
                    </View>
                ) : null}
                {type === "flash" ? null : (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: 15, // Set a consistent height if needed for alignment
                        }}
                    >
                        <Rating rate={star || 0} size={11} />
                        <Text style={{ fontSize: 12, marginLeft: 10 }}>
                            {formatDistance(distance)}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

export default ProductCard;
