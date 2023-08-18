import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { style } from "../../style";
import Checkbox from "expo-checkbox";
import Alert from "../../components/alert";
import Button from "../../components/button";
import Card from "./Card";
import { cart } from "./data";

type prop = {
  navigation: any;
};

export default function Cart({ navigation }: prop) {
  const [isAllChecked, setIsAllChecked] = React.useState(false);

  return (
    <ScrollView
      style={[
        style.container,
        {
          flex: 1,
        },
      ]}
    >
      <Alert
        label="You have a discount voucher for this products"
        type="action"
        onPress={() => {}}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: "5%",
          marginHorizontal: "5%",
          borderBottomWidth: 1,
          borderColor: "#D2D2D2",
          borderStyle: "solid",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={{}}
            value={isAllChecked}
            onValueChange={setIsAllChecked}
            color={isAllChecked ? "#2A347E" : undefined}
          />
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#424242",
              marginLeft: 15,
            }}
          >
            Select Items
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 12,
            color: "#1C2534",
          }}
        >
          ₦85,300 (3)
        </Text>
      </View>
      <ScrollView>
        <FlatList
          style={{ marginHorizontal: "5%", flex: 1 }}
          data={cart}
          renderItem={({ item }: any) => <Card {...item} />}
          keyExtractor={(item: any) => item.id}
        />
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: "5%",
          marginHorizontal: "5%",
          borderStyle: "solid",
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: "#D2D2D2",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="ios-card" size={18} color="#2A347E" />
          <Text
            style={{
              color: "#2A347E",
              fontSize: 11,
              fontWeight: "600",
              marginLeft: 15,
            }}
          >
            Voucher
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "#1F1F1F",
              fontSize: 10,
              fontWeight: "500",
              marginRight: 15,
            }}
          >
            Click to add or check Voucher
          </Text>
          <Ionicons name="chevron-forward" size={18} color="#2A347E" />
        </View>
      </View>
      <View
        style={{
          padding: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.7 }}>
          <Text style={{ color: "#1C2534", fontSize: 15, fontWeight: "500" }}>
            Shipping Address
          </Text>
          <Text style={{ color: "#505050", fontSize: 12 }}>
            54, Adelubido crescent, opposite chicken republic (Ondo State,
            Nigeria)
          </Text>
        </View>
        <Text
          style={{
            padding: 10,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#2A347E",
            color: "#2A347E",
            fontSize: 10,
            borderRadius: 15,
          }}
        >
          Change
        </Text>
      </View>
      <View
        style={{
          padding: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 0.7 }}>
          <Text style={{ color: "#1C2534", fontSize: 15, fontWeight: "500" }}>
            Total Price
          </Text>
          <Text style={{ color: "#1C2534", fontSize: 18 }}>₦85,300</Text>
        </View>
        <Button
          title="Checkout(3)"
          onPress={() => {
            try {
              navigation.navigate("Checkout");
            } catch (error) {
              console.log("an error occured");
            }
          }}
        />
      </View>
    </ScrollView>
  );
}
