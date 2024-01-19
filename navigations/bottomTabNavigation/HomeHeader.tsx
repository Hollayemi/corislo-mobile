import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;
interface prop {
  category?: boolean;
  settings?: boolean;
}
export default function HomeHeader({ category, settings }: prop) {
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingBottom: 20,
        paddingTop: settings
          ? 20
          : Platform.OS === "android"
          ? StatusBarManager.HEIGHT + 20
          : 0,
        backgroundColor: settings ? "#F5F5F5" : "#fff",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/userPics.png")}
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ fontWeight: "600", fontSize: 13 }}>Creative Box</Text>
          <Text style={{ fontWeight: "500", fontSize: 8, color: "#7C7C7C" }}>
            client.creative@gmail.com
          </Text>
        </View>
      </View>

      {settings ? (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {category ? (
            <Ionicons
              style={{ marginRight: 20 }}
              name="search"
              size={24}
              color="#292D32"
            />
          ) : null}
          <Ionicons name="cart-outline" size={24} color="#292D32" />
          <Ionicons
            style={{ marginLeft: 20 }}
            name="notifications-outline"
            size={24}
            color="#292D32"
          />
        </View>
      )}
    </View>
  );
}
