import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { prop } from "./data";

interface props extends prop {
  checkout: boolean;
}

export default function Card({
  color,
  price,
  size,
  store,
  title,
  checkout,
}: props) {
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        padding: "2%",
        backgroundColor: "#F6F6F6",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      {checkout ? null : (
        <Checkbox
          style={{}}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#2A347E" : undefined}
        />
      )}
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 80, height: 80, objectFit: "cover" }}
      />
      <View style={{ flex: 0.9 }}>
        <Text style={{ fontSize: 12, fontWeight: "500", color: "#424242" }}>
          {title.slice(0, 34)}...
        </Text>
        <View
          style={{
            flexDirection: checkout ? "column" : "row",
            alignItems: checkout ? "stretch" : "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: checkout ? "row" : "column",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#1C2534" }}>
              ₦{price}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 10, fontWeight: "500", color: "#1F1F1F" }}
              >
                Size: {size.toLocaleUpperCase()} {"  "} <Text>Color:</Text>
              </Text>
              <Text
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: color,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
          {checkout ? null : (
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="minuscircle" size={20} color="#A3AAAE" />
              <Text style={{ marginHorizontal: 10 }}>2</Text>
              <AntDesign name="pluscircle" size={20} color="#A3AAAE" />
            </View>
          )}
        </View>
        {checkout ? null : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2A347E",
                  fontWeight: "500",
                  fontSize: 11,
                }}
              >
                {store}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#2A347E"
                style={{ marginLeft: 5 }}
              />
            </View>
            <Text style={{ color: "#FF4141", fontWeight: "500", fontSize: 10 }}>
              <AntDesign name="delete" size={10} color="#FF4141" /> Delete
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
