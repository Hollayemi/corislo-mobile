import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../components/button";
import { style } from "../../style";
import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

type prop = {
  navigation: any;
};

export default function Home({ navigation }: prop) {
  return (
    <SafeAreaView
      style={[
        style.container,
        {
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        },
      ]}
    >
      <View style={styles.upper}>
        <View style={styles.logo}>
          <Image source={require("../../assets/logo1.png")} />
        </View>
      </View>
      <Text style={styles.heading}>Corisio</Text>
      <Text style={styles.text}>
        Connecting Buyers and Sellers, On and Offline
      </Text>
      <View style={styles.btnView}>
        <Button
          onPress={() => {
            navigation.navigate("login");
          }}
          title="Open an account"
          IconAfter={
            <FontAwesome5 name="arrow-circle-right" size={15} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upper: {
    backgroundColor: "#2A347E",
    height: "40%",
    borderBottomLeftRadius: 120,
    borderBottomEndRadius: 120,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#fff",
    height: 115,
    width: 115,
    borderRadius: 115,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -50,
  },
  heading: {
    color: "#2A347E",
    textAlign: "center",
    fontSize: 49,
    fontWeight: "700",
    marginVertical: "10%",
  },
  text: {
    color: "#2A347E",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
  },
  btnView: {
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
});
