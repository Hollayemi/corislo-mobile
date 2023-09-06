import React from "react";
import { FlatList, Text, View } from "react-native";

import Card from "../cart/Card";
import { Entypo } from "@expo/vector-icons";
import { DataProp } from "./data";

function CardRow({ store, waybillFee, method, data }: DataProp) {
  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
        marginTop: "5%",
        padding: "5%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#1f1f1f", fontWeight: "600", fontSize: 12 }}>
          {store}
        </Text>
        {method == "Way-Billing" ? (
          <Text style={{ color: "#1f1f1f", fontWeight: "500", fontSize: 10 }}>
            Waybill Fee: ₦{waybillFee}
          </Text>
        ) : null}
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }: any) => <Card {...item} checkout={true} />}
        keyExtractor={(item: any) => item.id}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#424242", fontWeight: "500", fontSize: 11 }}>
            <Text style={{ color: "#1f1f1f", fontWeight: "600", fontSize: 12 }}>
              Shipping Method:
            </Text>
            {method}
          </Text>
          <Text style={{ color: "#7C7C7C", fontSize: 10 }}>
            Delivery is between July 26 and August 1 (7 - 13 Days).
          </Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#2A347E" />
      </View>
    </View>
  );
}

export default CardRow;
