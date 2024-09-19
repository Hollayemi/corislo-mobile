import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import {
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";
import Stepper from "./Stepper";
import { OrderStatus } from "../../screens/order/data";
import { OrderStages } from "./stages";
import { timeSince } from "../../utils/format";
import { Routes } from "../../navigations/routes";
import Rating from "../rating";
import { useDispatch } from "react-redux";
import { feedbackHandler } from "../../redux/state/slices/home/feedback";

export default function ReviewCard({
    status,
    navigation,
    rating,
    index,
    ...others
}: any) {
    const dispatch = useDispatch();
    const [ShowDetails, setShowDetails] = useState(false);
    const [toReview, setToReview] = useState(false);
    const [rate, setRate] = useState(0);
    const [reviewNote, setReviewNote] = useState("");

    const { store, branch, orderItemId, prodId } = others;
    const reviewPayload = {
        productId: prodId,
        orderItemId,
        store,
        branch,
        review: reviewNote,
        rate,
    };

    const orderDetails = () => {
        !rating ? setShowDetails(!ShowDetails) : setToReview(others.prodId);
    };
    return (
        <View
            style={{
                borderColor: "#EFEFEF",
                borderWidth: 1,
                borderStyle: "solid",
                marginBottom: 20,
                borderRadius: 10,
                overflow: "hidden",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                    backgroundColor: ShowDetails ? "#F5F5F5" : "#fff",
                    // borderRadius:  10,
                }}
            >
                <Image
                    source={require("../../assets/demo/2.png")}
                    style={{ width: 70, height: 70, borderRadius: 5 }}
                />
                <View
                    style={{
                        flex: 0.95,
                    }}
                >
                    <Text
                        style={{
                            color: "#464646",
                            fontFamily: "Poppins_600SemiBold",
                            fontSize: 16,
                        }}
                        onPress={orderDetails}
                    >
                        {!rating && "Order No:"}
                        {others.orderSlug}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: "Poppins_600SemiBold",
                                color: "#696666",
                            }}
                            onPress={orderDetails}
                        >
                            {timeSince(others.createdAt)}
                        </Text>
                        <Status status={others.currStatus} />

                        <AntDesign
                            name={ShowDetails ? "up" : "down"}
                            size={14}
                            color="black"
                            onPress={orderDetails}
                        />
                    </View>
                    <Text
                        style={{
                            color: "#696666",
                            fontFamily: "Poppins_500Medium",
                            fontSize: 10,
                        }}
                    >
                        No of items: {others.quantity || others.items?.length}
                    </Text>
                </View>
            </View>
            {ShowDetails ? (
                <>
                    <OrderStages status={status} />
                    <Text
                        style={{
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: "#F5F5F5",
                            padding: 10,
                            fontSize: 14,
                            fontFamily: "Poppins_600SemiBold",
                            color: "#1F1F1F",
                            marginTop: 10,
                        }}
                        onPress={() =>
                            navigation.navigate(Routes.orderDetails, {
                                data: { status, ...others },
                            })
                        }
                    >
                        View Order Details
                    </Text>
                </>
            ) : null}
            {!status ? (
                <View>
                    {others.items?.prodId === toReview ? (
                        <View
                            style={{ backgroundColor: "#F5F5F5", padding: 20 }}
                        >
                            <Rating
                                size={28}
                                rate={rate}
                                myStyles={{ marginBottom: 10 }}
                                setClick={setRate}
                            />
                            <TextInput
                                selectionColor={"#233974"}
                                multiline
                                placeholder="Tell us more about your rating!"
                                numberOfLines={10}
                                onChangeText={(e) => setReviewNote(e)}
                                style={{
                                    color: "#464646",
                                    backgroundColor: "#fff",
                                    textAlignVertical: "top",
                                    padding: 10,
                                    fontSize: 18,
                                }}
                            />
                            <Text
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: "Poppins_600SemiBold",
                                    color: "#7E7E7E",
                                    marginTop: 20,
                                }}
                                onPress={() => {
                                    feedbackHandler(reviewPayload, dispatch);
                                    setRate(0);
                                }}
                            >
                                Submit your review
                            </Text>
                        </View>
                    ) : (
                        <Text
                            style={{
                                width: "100%",
                                textAlign: "center",
                                backgroundColor: "#F5F5F5",
                                padding: 10,
                                fontSize: 12,
                                fontFamily: "Poppins_600SemiBold",
                                color: "#1F1F1F",
                                marginTop: 10,
                            }}
                            onPress={orderDetails}
                        >
                            Rate this product {"  "}{" "}
                            <MaterialCommunityIcons
                                name="star-shooting-outline"
                                size={20}
                            />
                        </Text>
                    )}
                </View>
            ) : null}
        </View>
    );
}

export function Status({ status }: { status?: string }) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 6,
            }}
        >
            {!status ? (
                <AntDesign name="lock" size={17} color="green" />
            ) : status === "Completed" ? (
                <Ionicons
                    name="checkmark-done-circle"
                    size={17}
                    color="green"
                />
            ) : status === "Cancelled" ? (
                <MaterialIcons name="cancel" size={17} color="red" />
            ) : (
                <MaterialCommunityIcons
                    name="progress-clock"
                    size={17}
                    color="#2A347E"
                />
            )}
            <Text style={{ marginLeft: 5 }}>
                {!status
                    ? "In Progress"
                    : status === "Completed"
                    ? "Completed"
                    : status === "Cancelled"
                    ? "Cancelled"
                    : "In Progress"}
            </Text>
        </View>
    );
}
