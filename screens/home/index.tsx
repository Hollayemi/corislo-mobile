import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../components/button";
import { style } from "../../style";

type prop = {
  navigation: any;
};

export default function Home({ navigation }: prop) {
  return (
    <View style={style.container}>
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
          Icon={
            <FontAwesome5 name="arrow-circle-right" size={15} color="white" />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upper: {
    backgroundColor: "#2A347E",
    height: "40%",
    borderBottomLeftRadius: 120,
    borderBottomEndRadius: 120,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#fff",
    height: 115,
    width: 115,
    borderRadius: 115,
    display: "flex",
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
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
});
