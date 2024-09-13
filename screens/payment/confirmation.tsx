import { Image, ScrollView, Text, View } from "react-native";
import { style } from "../../style";
import Button from "../../components/button";
import { Routes } from "../../navigations/routes";
import { Ionicons } from "@expo/vector-icons";

export default function OrderConfirmation({ navigation }: any) {
    return (
        <View style={{ ...style.container }}>
            <View
                style={{
                    padding: "5%",
                    backgroundColor: "#fff",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text
                        style={{
                            fontWeight: "300",
                            lineHeight: 26,
                            fontSize: 16,
                            marginTop: 10,
                        }}
                    >
                        Thank you! Your order has been placed and and it will be
                        delivered to you soon.
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            source={require("../../assets/delivery.png")}
                            style={{
                                width: 300,
                                height: 300,
                                marginTop: "10%",
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontWeight: "700",
                            lineHeight: 26,
                            fontSize: 18,
                            marginTop: 10,
                        }}
                    >
                        For more details, track your delivery status under
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "800",
                                lineHeight: 26,
                                fontSize: 18,
                                marginTop: 10,
                                color: "#2A347E",
                            }}
                        >
                            Profile
                        </Text>
                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#233974"
                            style={{
                                marginTop: 10,
                            }}
                        />
                        <Text
                            style={{
                                fontWeight: "800",
                                lineHeight: 26,
                                fontSize: 18,
                                marginTop: 10,
                                color: "#2A347E",
                            }}
                        >
                            Order
                        </Text>
                    </View>
                    <Text
                        style={{
                            fontWeight: "500",
                            backgroundColor: "#F0F2FF",
                            width: 150,
                            paddingHorizontal: 35,
                            borderRadius: 50,
                            borderWidth:1,
                            borderColor: "#2A347E",
                            lineHeight: 55,
                            fontSize: 18,
                            marginTop: 40,
                            color: "#2A347E",
                        }}
                        onPress={() => navigation.navigate(Routes.order)}
                    >
                        View Orders
                    </Text>
                </View>
                <View style={{ marginTop: "30%" }}>
                    <Button
                        title="Continue Shopping"
                        onPress={() => navigation.navigate(Routes.homeScreen)}
                    />
                </View>
            </View>
        </View>
    );
}
