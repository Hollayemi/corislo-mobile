import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { reshapePrice } from "../../utils/format";
import { removeOrAddToArray } from "../../utils/arrayFunction";
import {
    addCartHandler,
    changeQuantity,
    savedQuantity,
} from "../../redux/state/slices/home/cart";
import { useDispatch } from "react-redux";

interface props {
    checkout: boolean;
    data: any;
}

export default function Card({ checkout, selected, selectCart, ...data }: any) {
    const dispatch = useDispatch();
    const [qty, newQty] = useState(data.quantity);
    const payload = {
        productId: data?.productId,
        store: data?.store,
        branch: data?.branch,
    };
   
    const isSelected = selected?.includes(data.productId);
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 5,
                padding: "3%",

                backgroundColor: "#F6F6F6",
                justifyContent: "space-between",
                flex: 1,
            }}
        >
            {checkout ? null : (
                <Checkbox
                    style={{}}
                    value={isSelected}
                    onValueChange={() =>
                        removeOrAddToArray(data.productId, selected, selectCart)
                    }
                    color={isSelected ? "#2A347E" : undefined}
                />
            )}
            <Image
                source={{
                    uri: data?.product?.images
                        ? data?.product.images[0]
                        : "https://res.cloudinary.com/xmart/image/upload/v1725629754/corisio/demo/22_un3lp1.png",
                }}
                style={{ width: 70, height: 70, objectFit: "cover" }}
            />
            <View style={{ flex: 0.9 }}>
                <Text
                    style={{
                        fontSize: checkout ? 16 : 14,
                        marginBottom: checkout ? 10 : 0,
                        fontWeight: "500",
                        color: "#424242",
                    }}
                    numberOfLines={1}
                >
                    {data.product.prodName}
                </Text>
                <View
                    style={{
                        flexDirection: checkout ? "column" : "row",
                        alignItems: checkout ? "stretch" : "center",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                            flexDirection: checkout ? "row" : "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: "#1C2534",
                            }}
                        >
                            {reshapePrice(data.price)}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 10,
                                    fontWeight: "500",
                                    color: "#1F1F1F",
                                }}
                            >
                                {/* Size: {size.toLocaleUpperCase()} {"  "}{" "} */}
                                <Text>Color:</Text>
                            </Text>
                            <Text
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: "red",
                                    marginLeft: 5,
                                }}
                            />
                        </View>
                    </View>
                    {checkout ? null : (
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign
                                name="minuscircle"
                                size={20}
                                color={
                                    data.quantity > 1 ? "#2A347E" : "#A3AAAE"
                                }
                                onPress={() =>
                                    changeQuantity(
                                        {
                                            id: data._id,
                                            operator: "-",
                                        },
                                        dispatch,
                                        newQty
                                    )
                                }
                            />
                            <Text style={{ marginHorizontal: 10 }}>
                                {data.quantity}
                            </Text>
                            <AntDesign
                                name="pluscircle"
                                size={20}
                                color="#2A347E"
                                onPress={() =>
                                    changeQuantity(
                                        {
                                            id: data._id,
                                            operator: "+",
                                        },
                                        dispatch,
                                        newQty
                                    )
                                }
                            />
                        </View>
                    )}
                </View>
                {checkout ? null : (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 5,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#2A347E",
                                    fontWeight: "500",
                                    fontSize: 11,
                                }}
                            >
                                {data.store}
                            </Text>
                            <Ionicons
                                name="chevron-forward"
                                size={18}
                                color="#2A347E"
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                        <Text
                            style={{
                                color: "#FF4141",
                                fontWeight: "500",
                                fontSize: 15,
                            }}
                            onPress={() => addCartHandler(payload, dispatch)}
                        >
                            <AntDesign
                                name="delete"
                                size={15}
                                color="#FF4141"
                            />{" "}
                            Delete
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}
