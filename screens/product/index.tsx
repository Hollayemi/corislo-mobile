import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Header from "../../components/header";
import { style } from "../../style";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { color, review, similar, size } from "./data";
import Rating from "../../components/rating";
import Button from "../../components/button";
import Card from "./Card";
import Coment from "./Coment";
import { Platform, NativeModules } from "react-native";

const { StatusBarManager } = NativeModules;

type prop = {
  navigation: any;
};

export default function Product({ navigation }: prop) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      <ScrollView style={style.container}>
        <Header title="Product Details" navigation={navigation} />
        <View style={[styles.slider, styles.shadowProp, styles.elevation]}>
          <Image
            source={require("../../assets/icon.png")}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </View>
        <View style={{ marginHorizontal: "5%", paddingBottom: "15%" }}>
          <Text style={styles.title}>Denim Athletic Sneakers</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 0.7,
              }}
            >
              <Text style={styles.price}>₦25,000</Text>
              <Text style={styles.discount}>
                Save 12% {"\n"} With tax inclusive.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 0.2,
                justifyContent: "space-between",
              }}
            >
              <AntDesign name="sharealt" size={24} color="black" />
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            </View>
          </View>
          <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 15 }}>
            Available sizes
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {size.map((text, index) => (
              <Text key={index} style={styles.size}>
                {text.toLocaleUpperCase()}
              </Text>
            ))}
          </View>
          <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 15 }}>
            Select Color
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {color.map((text, index) => (
              <Text
                key={index}
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: 13,
                  backgroundColor: text,
                  marginLeft: 10,
                }}
              />
            ))}
          </View>
          <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 15 }}>
            Description
          </Text>
          <Text
            style={{
              color: "#505050",
              fontSize: 12,
              fontWeight: "400",
              marginTop: "3%",
            }}
          >
            The perfect blend of contemporary design and casual comfort. Crafted
            with meticulous attention to detail, this shoe combines the timeless
            appeal of denim with the versatility of a classic footwear staple.
            Made from high-quality denim fabric, these shoes offer a unique and
            fashionable twist to your everyday look. The rugged yet refined
            denim material adds a touch of urban flair, allowing you to
            effortlessly elevate your style. Designed for both comfort and
            durability, these shoes feature a cushioned insole that provides
            all-day support, ensuring a comfortable stride from morning to
            night. The sturdy rubber outsole offers excellent traction on
            various surfaces, making them ideal for both indoor and outdoor
            activities.
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "600", marginVertical: 15 }}>
            Vendor
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#2A347E",
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Disto Ventures
              </Text>
              <Text
                style={{
                  color: "#000",
                  fontSize: 10,
                  borderRadius: 11,
                  borderWidth: 0.5,
                  borderColor: "#6D6D6D",
                  borderStyle: "solid",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  marginLeft: 10,
                }}
              >
                Follow
              </Text>
            </View>
            <Text style={{ color: "#2A347E", fontSize: 13 }}>
              <Ionicons name="md-chatbubbles" size={15} color="#2A347E" />
              Message
            </Text>
          </View>
          <Text style={{ fontWeight: "600", color: "#505050", fontSize: 10 }}>
            323 Followers
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 15,
            }}
          >
            <SimpleLineIcons name="location-pin" size={20} color="black" />
            <Text style={{ color: "#505050", fontSize: 12 }}>
              76, Olorunsogo street, Okeigbo {"\n"}(Ondo State, Nigeria)
            </Text>
          </View>
          <Text
            style={{
              color: "#2A347E",
              fontSize: 11,
              fontWeight: "600",
              textDecorationLine: "underline",
            }}
          >
            Show and track on Map <Ionicons name="md-open-outline" size={12} />
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ color: "#000", fontSize: 12, fontWeight: "600" }}>
              Product Review (15)
            </Text>
            <Rating rate={4} />
          </View>
          <ScrollView>
            <FlatList
              style={{ marginVertical: 20, flex: 1 }}
              data={review}
              renderItem={({ item }: any) => <Coment {...item} />}
              keyExtractor={(item: any) => item.id}
            />
          </ScrollView>
          <Text
            style={{
              color: "#2A347E",
              fontSize: 12,
              fontWeight: "600",
              textAlign: "center",
              marginVertical: 12,
            }}
          >
            Show all comment
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginVertical: 15,
              textAlign: "center",
            }}
          >
            Similar Products
          </Text>
          <ScrollView>
            <FlatList
              style={{ marginVertical: 20, flex: 1 }}
              horizontal
              data={similar}
              renderItem={({ item }: any) => <Card {...item} />}
              keyExtractor={(item: any) => item.id}
            />
          </ScrollView>

          <Button
            onPress={() => {
              console.log("cart pressed");
            }}
            title="Add to cart"
            IconBefore={
              <AntDesign name="shoppingcart" size={24} color="white" />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slider: {
    minHeight: 264,
  },
  // box shadow for ios
  shadowProp: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  // box shadow for android
  elevation: {
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "10%",
  },
  price: { color: "#1C2534", fontSize: 20, fontWeight: "700" },
  discount: {
    color: "#2769B7",
    fontSize: 7,
    fontWeight: "400",
    marginLeft: "5%",
  },
  size: {
    color: "#707070",
    fontSize: 10,
    fontWeight: "500",
    borderRadius: 3,
    backgroundColor: "#ECECEC",
    padding: "3%",
    width: "auto",
    marginLeft: 10,
  },
});
