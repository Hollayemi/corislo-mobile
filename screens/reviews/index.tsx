import React from "react";
import { FlatList, View } from "react-native";
import ReviewCard from "../../components/order/OrderCard";

export default function Review() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
      <FlatList data={[0, 1, 2]} renderItem={() => <ReviewCard />} />
    </View>
  );
}
