import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type prop = {
  title: string;
  navigation: any;
};

export default function Header({ title, navigation }: prop) {
  return (
    <View style={styles.header}>
      <View style={styles.titleGroup}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>{title}</Text>
      </View>
      {title === "Product Details" ? (
        <View style={styles.iconGroup}>
          <AntDesign name="search1" size={24} color="black" />
          <AntDesign
            name="shoppingcart"
            size={24}
            color="black"
            // style={{ marginLeft: 20 }}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconGroup: {
    display: "flex",
    flexDirection: "row",
    flex: 0.2,
    justifyContent: "space-between",
  },
  titleGroup: {
    display: "flex",
    flexDirection: "row",
    flex: 0.6,
    justifyContent: "space-between",
  },
  title: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
});
