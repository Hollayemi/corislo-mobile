import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { style } from "../../style";
import { AntDesign } from "@expo/vector-icons";
import useSWR from "swr";
import { Routes } from "../../navigations/routes";
import { deletePickupPerson } from "../../redux/state/slices/users/pickup";
import { useDispatch } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import { PickerCard } from "./card";

type Picker = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    relationship: string;
};

type PickersListProps = {
    pickers: Picker[];
};

export default function PickersList({ navigation }: any) {
    const dispatch = useDispatch();

    const { data: agents } = useSWR("/user/pickers");
    const pickers = agents?.data || [];

    const renderRightActions = (id: any, index: any) =>
        index > 0 ? (
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
                onPress={() => deletePickupPerson({ id }, dispatch)}
            />
        ) : (
            <></>
        );

    const renderItem = ({ item, index }: { item: Picker; index: any }) => (
        <View style={{ marginHorizontal: 15 }}>
            <PickerCard item={item} key={index} />
        </View>
    );

    return (
        <View style={style.container}>
            <SwipeListView
                data={pickers}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                rightOpenValue={-75}
                renderHiddenItem={(e: any) => renderRightActions(e.item._id, e.index)}
                ListEmptyComponent={<Text>No pickers available.</Text>}
                ListFooterComponent={
                    <View
                        style={{
                            ...styles.pickerContainer,
                            borderStyle: "dashed",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10%",
                            borderColor: "#2A347E",
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
                                navigation.navigate(Routes.addPickers)
                            }
                        >
                            Add New Picker
                        </Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        padding: 16,
        position: "relative",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderColor: "#C5C5C5",
        marginHorizontal: 15,
    },
    name: {
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
