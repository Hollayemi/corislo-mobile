import React from "react";
import { Text, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { formatName } from "../../utils/get-initials";
import OptionsMenu from "../option-menu";

type prop = {
    title: string;
    desc: string;
    view?: boolean;
    edit?: boolean;
};

export default function Method({ title, desc, view, edit }: prop) {
    return (
        <View
            style={{
                borderRadius: 5,
                borderWidth: 0.5,
                borderStyle: "solid",
                // borderColor: "#BBB",
                padding: "5%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 5,
            }}
        >
            <View style={{ flexDirection: "row" }}>
                {view ? (
                    <Entypo name="location" size={20} color="#2A347E" />
                ) : null}
                <View style={{ marginLeft: 15 }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "700",
                            color: "#2A347E",
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{ fontSize: 12, marginTop: 8, color: "#7C7C7C" }}
                    >
                        {view ? desc.slice(0, 45) : desc}
                    </Text>
                </View>
            </View>
            {view ? (
                <Entypo name="chevron-right" size={24} color="#2A347E" />
            ) : null}
            {edit ? <AntDesign name="edit" size={24} color="#2A347E" /> : null}
        </View>
    );
}

type deliveryMethod = {
    type: string;
    store: string;
    addresses: [];
    pickers: [];
    selectedValue: any;
    updatePayload: any;
};

export function MethodForDelivery({
    type,
    store,
    addresses,
    updatePayload,
    selectedValue,
    pickers,
}: deliveryMethod) {
    console.log({ pickers });
    const options =
        type === "pickup"
            ? pickers.map((e: any) => {
                  return { label: `${e?.name}, (${e?.relationship})`, key: e };
              })
            : addresses.map((e: any) => {
                  return {
                      label: `${e?.address}, ${e?.state}, ${e?.city} (${e?.postal_code})`,
                      key: e,
                  };
              });
    return (
        <OptionsMenu
            Component={() => (
                <View
                    style={{
                        borderRadius: 5,
                        borderWidth: 0.5,
                        borderStyle: "solid",
                        // borderColor: "#BBB",
                        padding: "5%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginVertical: 5,
                    }}
                >
                    <View style={{ flexDirection: "row" }}>
                        {type === "pickup" ? (
                            <AntDesign name="car" size={20} color="#2A347E" />
                        ) : (
                            <Entypo name="location" size={20} color="#2A347E" />
                        )}
                        <View style={{ marginLeft: 15 }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "700",
                                    color: "#2A347E",
                                }}
                            >
                                Set{" "}
                                {type === "pickup"
                                    ? "picker to pick from: "
                                    : "your location for "}
                                {formatName(store)} store
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    marginTop: 8,
                                    color: "#7C7C7C",
                                }}
                            >
                                {type === "pickup"
                                    ? selectedValue
                                        ? `${selectedValue?.name}, (${selectedValue?.relationship})`
                                        : "Myself"
                                    : selectedValue
                                    ? `${selectedValue?.address}, ${selectedValue?.state}, ${selectedValue?.city}, ${selectedValue?.postal_code}`
                                    : "Select location"}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
            others={{ label: "Delivery Method" }}
            options={options}
            selectedValue={""}
            setSelectedValue={(x: string) =>
                updatePayload((prev: any) => {
                    return {
                        ...prev,
                        picker: { ...prev.picker, [store]: x },
                    };
                })
            }
        />
    );
}
