import React from "react";
import { Review } from "./data";
import Rating from "../../components/rating";
import { View, Image, Text } from "react-native";
import { formatDate } from "../../utils/format";

export default function Coment({ comment, date, image, user, rating, id }: Review) {
    return (
        <View
            key={id}
            style={{
                flexDirection: "row",
                marginTop: 20,
                paddingHorizontal: 0,
            }}
        >
            <Image
                source={require("../../assets/user/1.png")}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    objectFit: "contain",
                    marginRight: 10,
                }}
            />
            <View style={{ paddingLeft: 10 }}>
                <Text
                    style={{
                        color: "#000",
                        fontSize: 15,
                        fontWeight: "600",
                        marginBottom: 5,
                    }}
                >
                    {user}
                </Text>
                <Text
                    style={{
                        color: "#505050",
                        fontSize: 13,
                        lineHeight: 20,
                        fontWeight: "400",
                        paddingRight: "20%",
                    }}
                >
                    {comment}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: -5,
                    }}
                >
                    <Rating size={13} rate={rating} />

                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "500",
                            marginLeft: 10,
                        }}
                    >
                        {formatDate(new Date())}
                    </Text>
                </View>
            </View>
        </View>
    );
}
