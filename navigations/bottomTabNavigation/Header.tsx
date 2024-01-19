import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

function Header({ layout, navigation, options, route }: BottomTabHeaderProps) {
  const [isChecked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingBottom: 20,
        paddingTop:
          Platform.OS === "android" ? StatusBarManager.HEIGHT + 20 : 0,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#28303F"
          style={{
            backgroundColor: "#EFEFEF",
            height: 30,
            width: 30,
            borderRadius: 30 / 2,
            marginRight: "15%",
          }}
        />
        <Text style={{ fontWeight: "500", fontSize: 16 }}>
          {options.tabBarLabel?.toString()}
        </Text>
      </View>
      {route.name == "Cart" ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#7C7C7C",
              marginRight: 15,
            }}
          >
            Select All
          </Text>
          <Checkbox
            style={{}}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#2A347E" : undefined}
          />
        </View>
      ) : null}
    </View>
  );
}

export default Header;
