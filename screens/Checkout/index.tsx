import React from "react";
import { FlatList, Text, View } from "react-native";
import Alert from "../../components/alert";
import Method from "../../components/shipping/Method";
import { style } from "../../style";
import { itemData } from "./data";
import CardRow from "./CardRow";
import Voucher from "../cart/Voucher";
import Button from "../../components/button";
import { Routes } from "../../navigations/routes";

export default function Checkout({ navigation }: any) {
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
        style={{ flex: 1, padding: "5%" }}
        data={itemData}
        renderItem={({ item }: any) => <CardRow {...item} checkout={true} />}
        // keyExtractor={(item: any) => item.id}
        ListFooterComponent={
          <>
            <Voucher />
            <Text style={{ color: "#1C2534", fontSize: 15, fontWeight: "600" }}>
              Summary
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
                paddingTop: 15,
              }}
            >
              <Text
                style={{ color: "#424242", fontSize: 13, fontWeight: "500" }}
              >
                Total items cost
              </Text>
              <Text
                style={{ color: "#424242", fontSize: 13, fontWeight: "600" }}
              >
                ₦85,300
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <Text
                style={{ color: "#424242", fontSize: 13, fontWeight: "500" }}
              >
                Saved
              </Text>
              <Text
                style={{ color: "#FF0C0C", fontSize: 13, fontWeight: "600" }}
              >
                -₦3,700
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <Text
                style={{ color: "#424242", fontSize: 13, fontWeight: "500" }}
              >
                Total Way-Billing Fee
              </Text>
              <Text
                style={{ color: "#424242", fontSize: 13, fontWeight: "600" }}
              >
                ₦4500
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 15,
                marginBottom: "10%",
              }}
            >
              <Text
                style={{ color: "#1C2534", fontSize: 15, fontWeight: "600" }}
              >
                Total
              </Text>
              <Text
                style={{ color: "#424242", fontSize: 15, fontWeight: "600" }}
              >
                ₦86,100
              </Text>
            </View>
          </>
        }
      />
      <Text
        style={{
          color: "#1F1F1F",
          fontSize: 11,
          backgroundColor: "#F6F6F6",
          paddingHorizontal: "10%",
          paddingVertical: "5%",
        }}
      >
        Upon clicking “Proceed to payment”, I confirm that i have read and
        acknowledged{" "}
        <Text style={{ color: "#2A347E", fontWeight: "600" }}>
          all terms and conditions.
        </Text>
      </Text>
      <View style={{ padding: "5%" }}>
        <Button
          title="Proceed to Payment"
          onPress={() => {
            try {
              navigation.navigate(Routes.Shipping);
            } catch (error) {
              console.log("An error occured");
            }
          }}
        />
      </View>
    </View>
  );
}
