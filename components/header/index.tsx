import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

type prop = {
  title: string;
  navigation: any;
  app?: boolean;
};

export default function Header({ title, navigation, app }: prop) {
  return (
    <View style={styles.header}>
      <View
        style={[
          styles.titleGroup,
          { justifyContent: app ? "flex-start" : "space-between" },
        ]}
      >
        <AntDesign
          name="left"
          size={24}
          color="black"
          style={{ paddingRight: "15%" }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {title === "product" ? (
        <View style={styles.iconGroup}>
          <AntDesign name="search1" size={24} color="black" />
          <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBarManager.HEIGHT + 20,
    backgroundColor: "#fff",
  },
  iconGroup: {
    flexDirection: "row",
    flex: 0.2,
    justifyContent: "space-between",
  },
  titleGroup: {
    flexDirection: "row",
    flex: 0.5,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
});
