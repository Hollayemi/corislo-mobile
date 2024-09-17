import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { itemData } from "../Checkout/data";
import CardRow from "../Checkout/CardRow";
import Balance from "../Checkout/Balance";
import Card from "../cart/Card";
import { Status } from "../../components/order/OrderCard";
import { formatName } from "../../utils/get-initials";
import { orderStatusMessages } from "../../components/order/data";
import { Divider } from "react-native-elements";
import { OrderStages } from "../../components/order/stages";
import Button from "../../components/button";
import { Routes } from "../../navigations/routes";
import { PickerCard } from "../Pickers/card";
import { AddressCard } from "../Address/card";

export default function OrderDetail({ navigation, route }: any) {
    const { data } = route.params;
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingHorizontal: "3%",
            }}
        >
            <Text
                style={{
                    fontSize: 23,
                    color: "#000",
                    fontFamily: "Poppins_600SemiBold",
                }}
            >
                Order No: {data.orderSlug}
            </Text>
            <Text
                style={{
                    fontSize: 17,
                    marginTop: 20,
                    marginBottom: 10,
                    color: "#464646",
                    fontFamily: "Poppins_600SemiBold",
                }}
            >
                Order Details
            </Text>
            <View
                style={{
                    backgroundColor: "#F6F6F6",
                    padding: 8,
                    marginBottom: 20,
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
                            fontSize: 16,
                            color: "#000",
                            fontFamily: "Poppins_600SemiBold",
                        }}
                    >
                        {data.store}
                    </Text>
                    <Status status={data.currStatus} />
                </View>
                <FlatList
                    data={data.items.storeProducts}
                    renderItem={({ item }: any) => (
                        <Card
                            {...{ product: { ...item, images: [item.images] } }}
                            price={item.prodPrice}
                            checkout={true}
                            order
                        />
                        // <View></View>
                    )}
                />
                <View>
                    <Text
                        style={{
                            color: "#424242",
                            fontWeight: "500",
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: "#1f1f1f",
                                fontWeight: "600",
                                fontSize: 15,
                                marginTop: 18,
                                marginRight: 10,
                            }}
                        >
                            Shipping Method:
                        </Text>{" "}
                        {data.deliveryMedium && formatName(data.deliveryMedium)}
                    </Text>
                    <Text
                        style={{
                            color: "#7C7C7C",
                            fontSize: 13,
                            paddingRight: 60,
                            lineHeight: 20,
                            marginTop: 5,
                        }}
                    >
                        {
                            orderStatusMessages[
                                data.currStatus
                                    .replaceAll(" ", "_")
                                    .toLowerCase()
                            ].note
                        }
                    </Text>
                    <Divider style={{ marginVertical: 20 }} />
                    <Text
                        style={{
                            fontSize: 17,

                            marginBottom: 10,
                            color: "#464646",
                            fontFamily: "Poppins_600SemiBold",
                        }}
                    >
                        Tracking details
                    </Text>
                    <OrderStages
                        status={data.status}
                        currStatus={data.currStatus}
                        details
                    />
                </View>
            </View>
            <View style={{ marginBottom: 50 }}>
                <Text
                    style={{
                        fontSize: 17,
                        marginTop: 20,
                        marginBottom: 10,
                        color: "#464646",
                        fontFamily: "Poppins_600SemiBold",
                    }}
                >
                    {data.deliveryMedium === "pickup"
                        ? "Picker"
                        : "Shipping Address"}
                </Text>
                {data.deliveryMedium === "pickup" ? (
                    <PickerCard item={data.items.picker} />
                ) : (
                    <AddressCard item={data.shippingAddress} />
                )}
            </View>
            <Balance amounts={{ originalPrice: data.totalAmount }} noVoucher />
            {data.currStatus === "Completed" && (
                <View style={{ marginVertical: 20 }}>
                    <Button
                        title="Review Products"
                        onPress={() => navigation.navigate(Routes.review)}
                    />
                </View>
            )}
        </ScrollView>
    );
}
