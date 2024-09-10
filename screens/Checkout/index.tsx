import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Alert from "../../components/alert";
import Method from "../../components/shipping/Method";
import { style } from "../../style";
import { itemData } from "./data";
import CardRow from "./CardRow";

import Button from "../../components/button";
import { Routes } from "../../navigations/routes";
import Balance from "./Balance";
import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useData";
import useSWR from "swr";
import { object } from "yup";

export default function Checkout({ navigation, route }: any) {
    const { selected } = route.params;
    const dispatch = useDispatch();
    const { cartedProds, userInfo, temp, showAlert } = useUserData() as any;
    const { data: carts, error } = useSWR(
        `/user/cart-group?${selected.length && `prods=${selected.join(".")}`}`
    );

    const groupedCart = carts ? carts.data.result : [];
    const amounts = carts ? carts.data.total : [];

    const [payload, updatePayload] = useState({
        products: cartedProds,
        delivery: {},
        picker: {},
        shippingAddress: temp.address || userInfo?.selectedAddress || null,
        billingCard: userInfo?.selectedBilling || null,
    });

    return (
        <View style={style.container}>
            <Alert
                label="Before making an order, make sure the address is correct 
and matches your expected delivery location."
                type="warning"
            />
            <FlatList
                ListHeaderComponent={
                    <>
                        <Method
                            title="Lagos"
                            desc="No 58, Allen Avenue, Along Lagos Mainland...."
                            view
                        />
                    </>
                }
                style={{ flex: 1, padding: "3%" }}
                data={groupedCart}
                renderItem={({ item }: any) => (
                    <CardRow
                        {...item}
                        updatePayload={updatePayload}
                        payload={payload}
                        checkout={true}
                    />
                )}
                // keyExtractor={(item: any) => item.id}
                ListFooterComponent={
                    <>
                        <Balance amounts={amounts} />
                    </>
                }
            />
            <Text
                style={{
                    color: "#1F1F1F",
                    fontSize: 11,
                    backgroundColor: "#F6F6F6",
                    borderTopColor: "#fff",
                    borderTopWidth: 4,
                    paddingHorizontal: "10%",
                    paddingVertical: "5%",
                    lineHeight: 20,
                }}
            >
                Upon clicking “Proceed to payment”, I confirm that i have read
                and acknowledged{" "}
                <Text style={{ color: "#2A347E", fontWeight: "600" }}>
                    all terms and conditions.
                </Text>
            </Text>
            <View style={{ padding: "5%" }}>
                <Button
                    title="Proceed to Payment"
                    onPress={() => {
                        try {
                            const getPickers = Object.keys(payload.delivery);
                            const stores = groupedCart.map(
                                (x: any) => x._id.store
                            );
                            const noDeliv = stores.filter(
                                (item: string) => !getPickers.includes(item)
                            );

                            if (!noDeliv.length) {
                                navigation.navigate(Routes.Shipping, {
                                    payload,
                                    paying:
                                        amounts?.discountedPrice ||
                                        amounts?.originalPrice,
                                });
                            } else {
                                showAlert({
                                    title: "Omission",
                                    message: `No delivery option set for ${noDeliv.join(
                                        "and"
                                    )}`,
                                });
                            }
                        } catch (error) {}
                    }}
                />
            </View>
        </View>
    );
}
