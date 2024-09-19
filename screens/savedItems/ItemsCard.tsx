import React from "react";
import { Image, Text, View } from "react-native";
import Rating from "../../components/rating";
import { AntDesign } from "@expo/vector-icons";
import { saveProduct } from "../../redux/state/slices/home/cart";
import { useDispatch } from "react-redux";

export default function ItemsCard({ product, ...others }: any) {
    const dispatch = useDispatch()
    function calculateDiscountedPrice(
        originalPrice: any,
        discountPercentage: any
    ) {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const discountedPrice = originalPrice - discountAmount;
        return discountedPrice;
    }
    const payload = {
        productId: product._id,
        store: others.store,
        branch: others.branch,
    };
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
            }}
        >
            <Image
                source={require("../../assets/demo/17.png")}
                style={{
                    objectFit: "fill",
                    borderRadius: 5,
                    width: 85,
                    height: 85,
                }}
            />
            <View style={{ flex: 0.8 }}>
                <Text
                    style={{
                        color: "#595959",
                        fontSize: 16,
                        fontFamily: "Poppins_500Medium",
                    }}
                >
                    {product.prodName.length > 19
                        ? `${product.prodName.substring(0, 25)}...`
                        : product.prodName}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        style={{
                            color: "#1C2534",
                            fontFamily: "Poppins_700Bold",
                            fontSize: 18,
                        }}
                    >
                        {others.discount
                            ? calculateDiscountedPrice(
                                  product.prodPrice,
                                  others.discount
                              )
                            : product.prodPrice}
                    </Text>
                    {others.discount ? (
                        <Text
                            style={{
                                color: "#1C2534",
                                fontFamily: "Poppins_600SemiBold",
                                fontSize: 12,
                                textDecorationLine: "line-through",
                                marginLeft: 10,
                            }}
                        >
                            {product.prodPrice}
                        </Text>
                    ) : null}
                    {others.discount && (
                        <Text
                            style={{
                                color: "#FF4141",
                                fontFamily: "Poppins_600SemiBold",
                                fontSize: 12,
                                marginLeft: 10,
                            }}
                        >
                            {others.discount}
                        </Text>
                    )}
                </View>
                <Rating rate={others.star ||0} size={16} />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text
                    style={{
                        backgroundColor: "#2A347E",
                        padding: 10,
                        paddingHorizontal: 25,
                        borderRadius: 50,
                        marginBottom: 20,
                        color: "#fff",
                        fontSize: 10,
                        fontFamily: "Poppins_500Medium",
                    }}
                >
                    Buy Now
                </Text>
                <Text
                    style={{
                        color: "#FF4141",
                        fontSize: 13,
                        fontFamily: "Poppins_500Medium",
                    }}
                    onPress={() => saveProduct(payload, dispatch)}
                >
                    <AntDesign name="delete" size={13} /> Remove
                </Text>
            </View>
        </View>
    );
}
