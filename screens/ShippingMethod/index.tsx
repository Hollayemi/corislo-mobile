import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Method from "../../components/shipping/Method";
import Button from "../../components/button";

type data = {
  title: string;
  desc: string;
  coming?: boolean;
};

const Data: data[] = [
  {
    title: "Pick-up",
    desc: "if you have anyone or you are close to the location and can pick up the order.",
  },
  {
    title: "Way-Billing",
    desc: "The vendor waybills the order to your desired or indicated location and you pay the waybill fee.",
  },
  {
    title: "Courier Service",
    desc: "The goods are being delivered by a courier service under the company’s service.",
    coming: true,
  },
];

function ShippingMethod() {
  const [selectedItem, setSelectedItem] = useState(-1);

  // Function to handle item click
  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };
  return (
    <View style={{ padding: "5%", backgroundColor: "#fff", flex: 1 }}>
      <FlatList
        data={Data}
        renderItem={({ item, index }) => (
          <View>
            <Method {...item} />
          </View>
        )}
        ListFooterComponent={
          <View style={{ marginTop: "30%" }}>
            <Button title="Select" onPress={() => {}} />
          </View>
        }
      />
    </View>
  );
}

export default ShippingMethod;
