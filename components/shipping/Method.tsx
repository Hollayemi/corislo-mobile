import React from "react";
import { Text, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

type prop = {
  title: string;
  desc: string;
  view?: boolean;
  edit?: boolean;
};

export default function Method({ title, desc, view, edit }: prop) {
  return (
    <View
      style={{
        borderRadius: 5,
        borderWidth: 0.5,
        borderStyle: "solid",
        // borderColor: "#BBB",
        padding: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {view ? <Entypo name="location" size={20} color="#2A347E" /> : null}
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "#2A347E" }}>
            {title}
          </Text>
          <Text style={{ fontSize: 12, marginTop: 8, color: "#7C7C7C" }}>
            {view ? desc.slice(0, 45) : desc}
          </Text>
        </View>
      </View>
      {view ? <Entypo name="chevron-right" size={24} color="#2A347E" /> : null}
      {edit ? <AntDesign name="edit" size={24} color="#2A347E" /> : null}
    </View>
  );
}
