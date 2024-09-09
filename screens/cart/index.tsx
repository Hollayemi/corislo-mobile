import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import Alert from "../../components/alert";
import Button from "../../components/button";
import Card from "./Card";
import Voucher from "./Voucher";
import { Routes } from "../../navigations/routes";
import useSWR from "swr";
import Loader from "../../components/loader";
import { cart } from "./data";
import { useUserData } from "../../hooks/useData";
import { reshapePrice } from "../../utils/format";

type prop = {
    navigation: any;
};

export default function Cart({ navigation }: prop) {
    const { data: addrs } = useSWR("/user/addresses");
    const addresses = addrs?.data || [];
    const addr = addresses[0] || {};
    const { cartedProds, cartData, cartIsLoading } = useUserData() as any;

    

    // const { data, error, isLoading, isValidating, mutate } = useSWR("/user/cart");
    const [selected, selectCart] = useState([]);
    return cartIsLoading ? (
        <View
            style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Loader />
        </View>
    ) : (
        <FlatList
            ListHeaderComponent={
                <>
                    <Alert
                        label="You have a discount voucher for this products"
                        type="action"
                        onPress={() => {}}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: "5%",
                            marginHorizontal: "5%",
                            borderBottomWidth: 1,
                            borderColor: "#D2D2D2",
                            borderStyle: "solid",
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Checkbox
                                style={{}}
                                value={selected.length === cartedProds.length}
                                onValueChange={(e) => {
                                    const checked = e;
                                    selectCart(() =>
                                        checked ? cartedProds : []
                                    );
                                }}
                                color={
                                    selected.length === cartedProds.length
                                        ? "#2A347E"
                                        : undefined
                                }
                            />
                            <Text
                                style={{
                                    fontWeight: "500",
                                    fontSize: 12,
                                    color: "#424242",
                                    marginLeft: 15,
                                }}
                            >
                                Select Items
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontWeight: "600",
                                fontSize: 12,
                                color: "#1C2534",
                            }}
                        >
                            {reshapePrice(cartData?.discountAmount)} (
                            {cartedProds.length})
                        </Text>
                    </View>
                </>
            }
            style={{
                paddingHorizontal: "5%",
                flex: 1,
                backgroundColor: "#fff",
            }}
            data={cartData?.products || []}
            renderItem={({ item }: any) => (
                <Card selected={selected} selectCart={selectCart} {...item} />
            )}
            keyExtractor={(item: any) => item.id}
            ListFooterComponent={
                <>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingVertical: "2%",
                            marginHorizontal: "0%",
                            borderStyle: "solid",
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: "#D2D2D2",
                            marginTop: 10,
                        }}
                    >
                        <Voucher />
                    </View>
                    <View
                        style={{
                            padding: "5%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <View style={{ flex: 0.7 }}>
                            <Text
                                style={{
                                    color: "#1C2534",
                                    fontSize: 16,
                                    fontWeight: "500",
                                    marginBottom: 5,
                                }}
                            >
                                Shipping Address
                            </Text>
                            <Text
                                style={{
                                    color: "#505050",
                                    fontSize: 13,
                                    lineHeight: 20,
                                }}
                            >
                                {`${addr?.address}, ${addr?.state}, ${addr?.city} (${addr?.postal_code})`}
                            </Text>
                        </View>
                        <Text
                            style={{
                                padding: 10,
                                paddingHorizontal: 30,
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "#2A347E",
                                color: "#2A347E",
                                fontSize: 10,
                                borderRadius: 15,
                            }}
                        >
                            Change
                        </Text>
                    </View>
                    <View
                        style={{
                            padding: "5%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View style={{ flex: 0.7 }}>
                            <Text
                                style={{
                                    color: "#1C2534",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Total Price
                            </Text>
                            <Text style={{ color: "#1C2534", fontSize: 18 }}>
                                ₦85,300
                            </Text>
                        </View>
                        <Button
                            title={`Checkout (${
                                selected.length || cartedProds.length
                            })`}
                            onPress={() => {
                                try {
                                    navigation.navigate(Routes.Checkout, { selected });
                                } catch (error) {
                                    console.log("an error occured");
                                }
                            }}
                            mystyles={{ height: 50 }}
                            disabled={cartedProds?.length < 1}
                        />
                    </View>
                </>
            }
        />
    );
}
