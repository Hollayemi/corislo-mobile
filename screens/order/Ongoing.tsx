import React from "react";
import { FlatList, Text, View } from "react-native";
import Stepper from "../../components/order/Stepper";
import ReviewCard from "../../components/order/OrderCard";

export default function Ongoing() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: "5%",
      }}
    >
      <FlatList
        // ListHeaderComponent={<Stepper />}
        data={[0, 1, 2]}
        renderItem={() => <ReviewCard status="In Progress" />}
      />
    </View>
  );
}
