import { Text, View, StyleSheet, ScrollView } from "react-native";
import { OptionList } from "./card";
import { style } from "../../style";
import { reshapePrice } from "../../utils/format";
import Button from "../../components/button";
import { Routes } from "../../navigations/routes";
import { useDispatch } from "react-redux";
import { addNewOrder } from "../../redux/state/slices/home/order";

export default function PaymentOption({ navigation, route }: any) {
    const data = route.params;
    console.log(data);
    const dispatch = useDispatch()
    return (
        <ScrollView style={{ ...style.container, paddingHorizontal: "5%" }}>
            <View
                style={{
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <View
                        style={{ flexDirection: "row", paddingHorizontal: 0 }}
                    >
                        <OptionList
                            type="card"
                            brief="Pay with bank trandfer or credit card"
                            onPress={() => {}}
                        />
                        <OptionList
                            type="crypto"
                            brief="Pay with Cryptocurrency"
                            onPress={() => {}}
                        />
                    </View>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text style={{ fontSize: 17, fontWeight: "700" }}>
                                Total to pay
                            </Text>
                            <Text style={{ fontSize: 17, fontWeight: "700" }}>
                                {reshapePrice(data.paying)}
                            </Text>
                        </View>

                        <View
                            style={{
                                backgroundColor: "#F5F5F5",
                                padding: 10,
                                marginTop: 30,
                            }}
                        >
                            <Text style={styles.text}>
                                We want to assure you that your payment security
                                is our top priority. We've partnered with a
                                verified and trusted payment vendor to ensure
                                your transactions are handled securely. Rest
                                assured, we do not store or have access to your
                                sensitive card details.
                            </Text>
                            <Text
                                style={{
                                    ...styles.text,
                                    fontWeight: "bold",
                                    marginTop: 10,
                                }}
                            >
                                Here's how it works:
                            </Text>
                            <Text style={styles.text}>
                                When you make a payment, you'll be directed to
                                our secure payment gateway.
                            </Text>
                            <Text style={styles.text}>
                                Enter your card details and complete the
                                transaction securely.
                            </Text>
                            <Text style={styles.text}>
                                Our trusted payment vendor handles the
                                transaction, keeping your details safe.
                            </Text>
                            <Text style={styles.text}>
                                Once the payment is processed, you'll receive a
                                confirmation from us.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: "20%" }}>
                    <Button
                        title={`Pay Now ${reshapePrice(data.paying)}`}
                        onPress={() => addNewOrder(data.payload, dispatch)}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#1F1F1F",
        lineHeight: 25,
        marginBottom: 6,
    },
});
