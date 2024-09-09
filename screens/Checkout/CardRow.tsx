import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

import Card from "../cart/Card";
import { Entypo } from "@expo/vector-icons";
import { DataProp } from "./data";
import { OrderStatus } from "../order/data";
import Stepper from "../../components/order/Stepper";
import OptionsMenu from "../../components/option-menu";
import { getCommonValuesInArrays } from "../../utils/arrayFunction";
interface prop extends DataProp {
  order?: boolean;
}
function CardRow({ payload, pickers, updatePayload, order, ...otherItems }: any) {
  const { _id: { store }, branchCheckout, fromBranch } = otherItems;
  const deliveryType = payload.delivery[store];
   const getCommonDeliveryMethods = getCommonValuesInArrays(
       ...fromBranch.map((x: any) => x?.product?.delivery || ["pickup"])
   );
  const picker = payload.picker[store];
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
              <Text
                  style={{ color: "#1f1f1f", fontWeight: "600", fontSize: 12 }}
              >
                  {store}
              </Text>
              {deliveryType === "waybilling" ? (
                  <Text
                      style={{
                          color: "#1f1f1f",
                          fontWeight: "500",
                          fontSize: 10,
                      }}
                  >
                      Await Invoice
                  </Text>
              ) : null}
          </View>
          <FlatList
              style={{ flex: 1 }}
              data={fromBranch}
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
              <OptionsMenu
                  // icon={() =>
                  //     <View>
                  //         <Text
                  //             style={{
                  //                 color: "#424242",
                  //                 fontWeight: "500",
                  //                 fontSize: 11,
                  //             }}
                  //         >
                  //             <Text
                  //                 style={{
                  //                     color: "#1f1f1f",
                  //                     fontWeight: "600",
                  //                     fontSize: 12,
                  //                 }}
                  //             >
                  //                 Shipping Method:
                  //             </Text>
                  //             {deliveryType}
                  //         </Text>
                  //         <Text style={{ color: "#7C7C7C", fontSize: 10 }}>
                  //             Delivery is between July 26 and August 1 (7 - 13
                  //             Days).
                  //         </Text>
                  //     </View>
                  // }
                  options={getCommonDeliveryMethods}
                  selectedValue={deliveryType}
                  setSelectedValue={() => {}}
              />
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
                              last={
                                  index === OrderStatus.length - 1
                                      ? true
                                      : false
                              }
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
