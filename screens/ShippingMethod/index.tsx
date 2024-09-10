import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Method, { MethodForDelivery } from "../../components/shipping/Method";
import Button from "../../components/button";
import useSWR from "swr";
import { Routes } from "../../navigations/routes";

type data = {
    title: string;
    desc: string;
    coming?: boolean;
};

const Data: data[] = [
    {
        title: "Pick-up",
        desc: "if you have anyone or you are close to the location and can pick up the order.",
    },
    {
        title: "Way-Billing",
        desc: "The vendor waybills the order to your desired or indicated location and you pay the waybill fee.",
    },
    {
        title: "Courier Service",
        desc: "The goods are being delivered by a courier service under the company’s service.",
        coming: true,
    },
];

function ShippingMethod({ navigation, route }: any) {
    const { data: addrs } = useSWR("/user/addresses");
    const { data: cards } = useSWR("/user/billings");
    const { data: agents } = useSWR("/user/pickers");
    const pickers = agents?.data || [];
    const addresses = addrs?.data || [];
    const billings = cards?.data || [];

    const [payload, updatePayload] = useState(route.params.payload);
    console.log(typeof payload, payload);
    console.log(Object.keys(payload.delivery));

    return (
        <View
            style={{
                padding: "5%",
                backgroundColor: "#fff",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <FlatList
                data={Object.keys(payload.delivery)}
                renderItem={({ item, index }: any) => (
                    <View>
                        <MethodForDelivery
                            store={item}
                            type={payload.delivery[item]}
                            selectedValue={payload.picker[item]}
                            addresses={addresses}
                            pickers={pickers}
                            updatePayload={updatePayload}
                        />
                    </View>
                )}
            />
            <View style={{ marginTop: "30%" }}>
                <Button
                    title="Next"
                    onPress={() =>
                        navigation.navigate(Routes.paymentOption, {
                            ...route.params,
                            payload,
                        })
                    }
                />
            </View>
        </View>
    );
}

export default ShippingMethod;
