import React, { useEffect, useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";
import Header from "../../components/header";
import { style } from "../../style";
import {
    AntDesign,
    MaterialIcons,
    Ionicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import { color, review, similar, size } from "./data";
import Rating from "../../components/rating";
import Button from "../../components/button";
import Card from "./Card";
import Coment from "./Coment";
import { reshapePrice } from "../../utils/format";
import useSWR from "swr";
import Review from "./review";
import { addCartHandler, saveProduct } from "../../redux/state/slices/home/cart";
import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useData";
import { addNewViewProduct } from "../../redux/state/slices/home";
import { followStore } from "../../redux/state/slices/users/following";

type prop = {
    navigation: any;
    product: object | null;
};

export default function Product({ navigation, route }: any) {
    const product = route.params;
    const dispatch = useDispatch()
    const { cartedProds, savedProds, socket, following } = useUserData() as any;
    const { data, error } = useSWR(`/branch/info?branchId=${product.branchId}`);
    const storeInfo = data?.data || {};
    const isFollowing = following.includes(storeInfo.branchId);
    console.log(following, isFollowing);
    const [selectedSizes, selectSize] = useState([])
    const [selectedColors, selectColor] = useState([]);
    const payload = {
        productId: product?._id,
        variation: {
            size: selectedSizes,
            color: selectedColors,
        },
        store: product?.store,
        branch: product?.branch,
    };
    useEffect(() => {
        addNewViewProduct(
            {
                productId: product?._id,
                branchId: product?.branchId,
                store: product?.store,
                branch: product?.branch,
            },
            dispatch
        );
    }, [data]);
    return (
        <>
            <ScrollView style={style.container}>
                <View
                    style={[styles.slider, styles.shadowProp, styles.elevation]}
                >
                    <Image
                        source={require("../../assets/demo/1.png")}
                        style={{
                            width: "100%",
                            objectFit: "contain",
                        }}
                    />
                </View>
                <View
                    style={{
                        marginHorizontal: "4%",
                        paddingBottom: "5%",
                    }}
                >
                    <Text style={styles.title}>{product.prodName}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                flex: 0.7,
                            }}
                        >
                            <Text style={styles.price}>
                                {reshapePrice(product.prodPrice)}
                            </Text>
                            {product.discount && (
                                <Text style={styles.discount}>
                                    Save {product.discount}% {"\n"} With tax
                                    inclusive.
                                </Text>
                            )}
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                flex: 0.2,
                                justifyContent: "space-between",
                            }}
                        >
                            <AntDesign
                                name="sharealt"
                                size={24}
                                color="black"
                            />
                            <MaterialIcons
                                name="favorite-outline"
                                size={24}
                                color={
                                    savedProds.includes(product?._id)
                                        ? "black"
                                        : "red"
                                }
                                onPress={() => saveProduct(payload, dispatch)}
                            />
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "600",
                            marginTop: 20,
                        }}
                    >
                        Available sizes
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 10,
                        }}
                    >
                        {size.map((text, index) => (
                            <Text key={index} style={styles.size}>
                                {text.toLocaleUpperCase()}
                            </Text>
                        ))}
                    </View>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "600",
                            marginTop: 24,
                        }}
                    >
                        Select Color
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 10,
                        }}
                    >
                        {color.map((text, index) => (
                            <Text
                                key={index}
                                style={{
                                    height: 26,
                                    width: 26,
                                    borderRadius: 13,
                                    backgroundColor: text,
                                    marginLeft: 10,
                                }}
                            />
                        ))}
                    </View>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "600",
                            marginTop: 18,
                        }}
                    >
                        Description
                    </Text>
                    <Text
                        style={{
                            color: "#505050",
                            fontSize: 14,
                            fontWeight: "400",
                            marginTop: "2%",
                            lineHeight: 28,
                        }}
                    >
                        {product.prodInfo}
                    </Text>
                    <View
                        style={{
                            backgroundColor: "#eee",
                            padding: 10,
                            marginVertical: 20,
                            borderRadius: 5,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Text
                                    style={{
                                        color: "#2A347E",
                                        fontSize: 23,
                                        fontWeight: "500",
                                    }}
                                >
                                    {storeInfo.businessName}
                                </Text>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontSize: 15,
                                        borderRadius: 11,
                                        borderWidth: 0.5,
                                        borderColor: "#6D6D6D",
                                        borderStyle: "solid",
                                        paddingVertical: 5,
                                        paddingHorizontal: 15,
                                        marginLeft: 10,
                                    }}
                                    onPress={() =>
                                        followStore(
                                            storeInfo,
                                            dispatch,
                                            socket,
                                            isFollowing
                                        )
                                    }
                                >
                                    {isFollowing ? "Following" : "Follow"}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    color: "#2A347E",
                                    fontSize: 16,
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="chatbubbles"
                                    size={26}
                                    color="#2A347E"
                                />
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "600",
                                    color: "#FDB415",
                                    fontSize: 13,
                                }}
                            >
                                @{storeInfo.branchName}
                            </Text>
                            <Text
                                style={{
                                    fontWeight: "600",
                                    color: "#505050",
                                    fontSize: 13,
                                    marginLeft: 19,
                                }}
                            >
                                {storeInfo.followers} Followers
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 19,
                            }}
                        >
                            <SimpleLineIcons
                                name="location-pin"
                                size={14}
                                color="#505050"
                            />
                            <Text
                                style={{
                                    color: "#505050",
                                    fontSize: 14,
                                    lineHeight: 18,
                                    marginLeft: 10,
                                }}
                            >
                                {storeInfo.address}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: "#2A347E",
                                fontSize: 14,
                                marginTop: 5,
                                fontWeight: "600",
                                textDecorationLine: "underline",
                            }}
                        >
                            Show and track on Map{" "}
                            <Ionicons name="open-outline" size={12} />
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginVertical: 15,
                            }}
                        >
                            <Text
                                style={{
                                    color: "#000",
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                Store Review (
                                {storeInfo.feedback
                                    ? storeInfo.feedback.totalReviews
                                    : 0}
                                )
                            </Text>
                            <Rating
                                rate={
                                    storeInfo.feedback
                                        ? storeInfo.feedback?.averageRating?.toFixed()
                                        : 0
                                }
                            />
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        marginHorizontal: "1%",
                        paddingBottom: "15%",
                    }}
                >
                    {product._id && <Review productId={product._id} />}
                    {/* <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 28,
                        }}
                    >
                        <Text
                            style={{
                                color: "#2A347E",
                                width: 150,
                                fontSize: 15,
                                fontWeight: "600",
                                textAlign: "center",
                                borderRadius: 11,
                                borderWidth: 0.5,
                                borderColor: "#6D6D6D",
                                borderStyle: "solid",
                                paddingVertical: 10,
                            }}
                        >
                            Show all comment
                        </Text>
                    </View> */}

                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "600",
                            marginTop: 38,
                            textAlign: "center",
                        }}
                    >
                        Similar Products
                    </Text>
                    <FlatList
                        style={{ marginVertical: 30, flex: 1 }}
                        horizontal
                        data={similar}
                        renderItem={({ item }: any) => <Card {...item} />}
                        keyExtractor={(item: any) => item.id}
                    />
                </View>
            </ScrollView>
            <Button
                onPress={() => addCartHandler(payload, dispatch)}
                mystyles={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTopWidth: 2,
                    borderTopColor: "#fff",
                    borderRadius: 0,
                    fontSize: 40,
                    // backgroundColor: "#fff",
                    color: "#2A347E",
                }}
                textSize={20}
                title={
                    cartedProds.includes(product?._id)
                        ? "Remove from cart"
                        : "Add to cart"
                }
                IconBefore={
                    <Text style={{ marginHorizontal: 60 }}>
                        <AntDesign
                            name="shoppingcart"
                            size={26}
                            color="white"
                        />
                    </Text>
                }
            />
        </>
    );
}

const styles = StyleSheet.create({
    slider: {
        minHeight: 264,
    },
    // box shadow for ios
    shadowProp: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: { width: 12, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    // box shadow for android
    elevation: {
        elevation: 10,
        shadowColor: "rgba(0, 0, 0, 0.4)",
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        marginTop: "10%",
    },
    price: { color: "#1C2534", fontSize: 24, fontWeight: "700" },
    discount: {
        color: "#2769B7",
        fontSize: 11,
        fontWeight: "400",
        marginLeft: "5%",
    },
    size: {
        color: "#707070",
        fontSize: 10,
        fontWeight: "500",
        borderRadius: 3,
        backgroundColor: "#ECECEC",
        padding: "3%",
        width: "auto",
        marginLeft: 10,
    },
});
