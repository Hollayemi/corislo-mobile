import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

import Card from "../cart/Card";
import { Entypo } from "@expo/vector-icons";
import { DataProp } from "./data";
import { OrderStatus } from "../order/data";
import Stepper from "../../components/order/Stepper";
interface prop extends DataProp {
  order?: boolean;
}
function CardRow({ store, waybillFee, method, data, order }: prop) {
  const [collapse, setCollapse] = useState(true);
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
        {/* <Entypo name="chevron-right" size={24} color="#2A347E" /> */}
      </View>
      {order && collapse ? (
        <View>
          <FlatList
            style={{ marginTop: 20 }}
            data={OrderStatus}
            renderItem={({ item, index }) => (
              <Stepper
                {...item}
                last={index === OrderStatus.length - 1 ? true : false}
              />
            )}
          />

          <Text
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "#D9D9D9",
              padding: 5,
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
              color: "#1F1F1F",
              marginTop: 10,
            }}
            onPress={() => {
              setCollapse(false);
            }}
          >
            Collapse All
          </Text>
        </View>
      ) : null}
    </View>
  );
}

export default CardRow;
