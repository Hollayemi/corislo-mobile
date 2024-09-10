import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

import Card from "../cart/Card";
import { Entypo } from "@expo/vector-icons";
import { DataProp } from "./data";
import { OrderStatus } from "../order/data";
import Stepper from "../../components/order/Stepper";
import OptionsMenu from "../../components/option-menu";
import { getCommonValuesInArrays } from "../../utils/arrayFunction";
import { formatName } from "../../utils/get-initials";
interface prop extends DataProp {
    order?: boolean;
}
function CardRow({
    payload,
    updatePayload,
    order,
    ...otherItems
}: any) {
    const {
        _id: { store },
        branchCheckout,
        fromBranch,
    } = otherItems;
    const deliveryType = payload.delivery[store];
    const getCommonDeliveryMethods = getCommonValuesInArrays(
        ...fromBranch.map((x: any) => x?.product?.delivery || ["pickup"])
    );
    const picker = payload.picker[store];
    const [collapse, setCollapse] = useState(true);
    return (
        <View
            style={{
                backgroundColor: "#F5F5F5",
                marginTop: "5%",
                padding: "5%",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        color: "#1f1f1f",
                        fontWeight: "600",
                        fontSize: 12,
                    }}
                >
                    {store}
                </Text>
                {deliveryType === "waybilling" ? (
                    <Text
                        style={{
                            color: "#1f1f1f",
                            fontWeight: "500",
                            fontSize: 10,
                        }}
                    >
                        Await Invoice
                    </Text>
                ) : null}
            </View>
            <FlatList
                style={{ flex: 1 }}
                data={fromBranch}
                renderItem={({ item }: any) => (
                    <Card {...item} checkout={true} />
                )}
                keyExtractor={(item: any) => item.id}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                }}
            >
                <OptionsMenu
                    Component={() => (
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
                                    Select Shipping Method:
                                </Text>{" "}
                                {deliveryType && formatName(deliveryType)}
                            </Text>
                            <Text style={{ color: "#7C7C7C", fontSize: 13 }}>
                                Delivery is between July 26 and August 1 (7 - 13
                                Days).
                            </Text>
                        </View>
                    )}
                    others={{ label: "Delivery Method" }}
                    options={getCommonDeliveryMethods.map((x: any) => {
                        return { label: formatName(x), key: x };
                    })}
                    selectedValue={deliveryType}
                    setSelectedValue={(x: string) =>
                        updatePayload((prev: any) => {
                            return {
                                ...prev,
                                delivery: { ...prev.picker, [store]: x },
                            };
                        })
                    }
                />
                <Entypo
                    name="chevron-right"
                    size={18}
                    style={{ marginTop: 9, marginRight: 8 }}
                    color="#555"
                />
            </View>
            {order && collapse ? (
                <View>
                    <FlatList
                        style={{ marginTop: 20 }}
                        data={OrderStatus}
                        renderItem={({ item, index }) => (
                            <Stepper
                                {...item}
                                last={
                                    index === OrderStatus.length - 1
                                        ? true
                                        : false
                                }
                            />
                        )}
                    />

                    <Text
                        style={{
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: "#D9D9D9",
                            padding: 5,
                            fontSize: 14,
                            fontFamily: "Poppins_600SemiBold",
                            color: "#1F1F1F",
                            marginTop: 10,
                        }}
                        onPress={() => {
                            setCollapse(false);
                        }}
                    >
                        Collapse All
                    </Text>
                </View>
            ) : null}
        </View>
    );
}

export default CardRow;
