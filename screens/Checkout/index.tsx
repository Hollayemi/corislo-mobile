import React from "react";
import { FlatList, Text, View } from "react-native";
import Alert from "../../components/alert";
import Method from "../../components/shipping/Method";
import { style } from "../../style";
import { itemData } from "./data";
import CardRow from "./CardRow";

import Button from "../../components/button";
import { Routes } from "../../navigations/routes";
import Balance from "./Balance";

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
            <Balance />
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
