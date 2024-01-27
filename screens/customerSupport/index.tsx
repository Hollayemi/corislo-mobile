import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import Type from "./type";
import { optionData, typeData } from "./data";
import Option from "./option";

export default function CustomerSupport() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 40 }}
      >
        <Image source={require("../../assets/customerSupport.png")} />
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 18,
            marginLeft: "5%",
          }}
        >
          <Text style={{ color: "#2A347E" }}>Hi</Text> how can we{" "}
          <Text style={{ color: "#2A347E" }}>help</Text>
          {"\n"} you today?
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingBottom: 20,
          flexWrap: "wrap",
        }}
        data={typeData}
        renderItem={({ item }: any) => <Type {...item} />}
        keyExtractor={(item: any) => item.id}
        ListFooterComponentStyle={{ width: "100%" }}
        ListFooterComponent={
          <>
            <FlatList
              ListHeaderComponent={<></>}
              data={optionData}
              renderItem={({ item }: any) => <Option {...item} />}
              keyExtractor={(item: any) => item.id}
            />
          </>
        }
      />
    </View>
  );
}
