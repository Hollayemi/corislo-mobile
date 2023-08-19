import React from "react";
import { ScrollView, Text, View } from "react-native";
import Alert from "../../components/alert";
import Method from "../shipping/method";

export default function Checkout() {
  return (
    <ScrollView>
      <Alert
        label="Before making an order, make sure the address is correct 
and matches your expected delivery location."
        type="warning"
      />
      <View style={{ padding: "5%" }}>
        <Method
          title="Lagos"
          desc="No 58, Allen Avenue, Along Lagos Mainland...."
          view
        />
      </View>
    </ScrollView>
  );
}
