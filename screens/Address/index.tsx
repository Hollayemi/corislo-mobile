import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Touchable,
    TouchableOpacity,
} from "react-native";
import { style } from "../../style";
import { AntDesign } from "@expo/vector-icons";
import useSWR from "swr";
import { Routes } from "../../navigations/routes";
import { deletePickupPerson } from "../../redux/state/slices/users/pickup";
import { useDispatch } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import Button from "../../components/button";
import { deleteAddress } from "../../redux/state/slices/users/address";
import { AddressCard } from "./card";
import { useUserData } from "../../hooks/useData";
import { selectAsDefault } from "../../redux/state/slices/users/address";

type Picker = {
    _id: string;
    state: string;
    address: string;
    selected: boolean;
    postal_code: string;
    city: string;
};

export default function Addresses({ navigation }: any) {
    const dispatch = useDispatch();
    const { userInfo } = useUserData() as any;
    const [selected, setSelected] = useState(userInfo?.selectedAddress || {}) as any;
    const { data: addrs } = useSWR("/user/addresses");
    const addresses = addrs?.data || [];
    console.log(addresses);
    const renderRightActions = (id: any) => (
        <AntDesign
            name="delete"
            size={20}
            color="red"
            style={{
                marginRight: 10,
                position: "absolute",
                top: 40,
                right: 30,
            }}
            onPress={() => deleteAddress(id, dispatch, navigation)}
        />
    );

    const renderItem = ({ item, index }: { item: Picker; index: any }) => {
        const isDefault = userInfo?.selectedAddress?._id === item._id;
        return (
            <TouchableOpacity
                onPress={() => !item.selected && setSelected(item)}
                key={index}
            >
                <AddressCard
                    item={item}
                    isDefault={isDefault}
                    icon={
                        <AntDesign
                            name="edit"
                            size={15}
                            style={{
                                marginRight: 10,
                                position: "absolute",
                                top: 15,
                                right: 10,
                            }}
                            onPress={() =>
                                deletePickupPerson({ id: item._id }, dispatch)
                            }
                        />
                    }
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ ...style.container, paddingTop: 12 }}>
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                <SwipeListView
                    data={addresses}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    rightOpenValue={-75}
                    renderHiddenItem={(e: any) =>
                        renderRightActions(e.item._id)
                    }
                    ListEmptyComponent={
                        <Text>No shipping address available.</Text>
                    }
                    ListFooterComponent={
                        <View
                            style={{
                                ...styles.pickerContainer,
                                borderStyle: "dashed",
                                justifyContent: "center",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: "10%",
                                borderColor: "#2A347E",
                                backgroundColor: "#EDEFFF",
                            }}
                        >
                            <AntDesign
                                name="plus"
                                color={"#2A347E"}
                                style={{ marginRight: 10 }}
                            />
                            <Text
                                style={{
                                    ...styles.detail,
                                    color: "#2A347E",
                                    fontWeight: "500",
                                }}
                                onPress={() =>
                                    navigation.navigate(Routes.addAddresses)
                                }
                            >
                                Add New Picker
                            </Text>
                        </View>
                    }
                />
                <Button
                    title="Set as Default"
                    mystyles={{ marginBottom: 40, marginHorizontal: 10 }}
                    onPress={() =>
                        selectAsDefault(
                            { field: "address", data: selected },
                            dispatch
                        )
                    }
                    disabled={userInfo?.selectedAddress?._id === selected._id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        padding: 16,
        position: "relative",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderColor: "#C5C5C5",
        marginHorizontal: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2A347E",
        marginBottom: 3,
    },
    detail: {
        fontSize: 14,
        color: "#555",
    },
});
