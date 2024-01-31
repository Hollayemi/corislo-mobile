import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function DeleteAccount() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: "7%",
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/phone.png")} />
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins_600SemiBold",
          marginVertical: "5%",
          color: "#1F1F1F",
          fontSize: 15,
        }}
      >
        Are you sure you want to delete your account permanently?
      </Text>
      <View style={{}}>
        <Text style={styles.infoText}>
          By proceeding, you understand and agree to the following:
        </Text>
        <Text style={[styles.infoText, styles.header]}>1. Data Deletion:</Text>
        <Text style={[styles.infoText, styles.text]}>
          Your account data, including personal information and order history,
          will be permanently deleted.
        </Text>
        <Text style={[styles.infoText, styles.header]}>2. Access Loss:</Text>
        <Text style={[styles.infoText, styles.text]}>
          You will lose access to your account and any associated services.
        </Text>
        <Text style={[styles.infoText, styles.header]}>
          3. Recovery Not Possible:
        </Text>
        <Text style={[styles.infoText, styles.text]}>
          Account deletion is irreversible. Once confirmed, it cannot be undone.
        </Text>
        <Text style={[styles.infoText, styles.header]}>
          4. Subscriptions and Promotions:
        </Text>
        <Text style={[styles.infoText, styles.text]}>
          You will no longer receive updates, newsletters, or promotions from
          us.
        </Text>
      </View>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Text
          style={{
            color: "#1F1F1F",
            marginTop: 30,
            textAlign: "center",
            fontSize: 12,
            padding: "5%",
            borderRadius: 50,
            flex: 0.4,
            fontFamily: "Poppins_500Medium",
            width: "100%",
            borderColor: "#000",
            borderStyle: "solid",
            borderWidth: 1,
          }}
        >
          Cancel
        </Text>
        <Text
          style={{
            backgroundColor: "##FF4141",
            color: "#fff",
            marginTop: 30,
            textAlign: "center",
            fontSize: 12,
            padding: "5%",
            borderRadius: 50,
            flex: 0.4,
            fontFamily: "Poppins_500Medium",
            width: "100%",
          }}
        >
          Done
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  infoText: {
    color: "#7E7E7E",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    marginTop: 15,
  },
  header: {
    marginLeft: 15,
  },
  text: {
    marginLeft: 30,
  },
});
