import React from "react";
import Voucher from "../cart/Voucher";
import { FlatList, Text, View } from "react-native";
import { reshapePrice } from "../../utils/format";

export default function Balance({ amounts, noVoucher }: any) {
    return (
        <>
            {!noVoucher && <Voucher />}
            <Text style={{ color: "#1C2534", fontSize: 15, fontWeight: "600" }}>
                Summary
            </Text>
            {amounts?.originalPrice && (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 5,
                        paddingTop: 15,
                    }}
                >
                    <Text
                        style={{
                            color: "#424242",
                            fontSize: 13,
                            fontWeight: "500",
                        }}
                    >
                        Total items cost
                    </Text>
                    <Text
                        style={{
                            color: "#424242",
                            fontSize: 13,
                            fontWeight: "600",
                        }}
                    >
                        {reshapePrice(amounts?.originalPrice)}
                    </Text>
                </View>
            )}
            {amounts?.discountedPrice && (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 5,
                    }}
                >
                    <Text
                        style={{
                            color: "#424242",
                            fontSize: 13,
                            fontWeight: "500",
                        }}
                    >
                        Saved
                    </Text>
                    <Text
                        style={{
                            color: "#FF0C0C",
                            fontSize: 13,
                            fontWeight: "600",
                        }}
                    >
                        - {reshapePrice(amounts?.discountedPrice)}
                    </Text>
                </View>
            )}

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 15,
                    marginBottom: "10%",
                }}
            >
                <Text
                    style={{
                        color: "#1C2534",
                        fontSize: 15,
                        fontWeight: "600",
                    }}
                >
                    Total
                </Text>
                <Text
                    style={{
                        color: "#424242",
                        fontSize: 15,
                        fontWeight: "600",
                    }}
                >
                    {reshapePrice(
                        amounts?.discountedPrice || amounts?.originalPrice
                    )}
                </Text>
            </View>
        </>
    );
}
