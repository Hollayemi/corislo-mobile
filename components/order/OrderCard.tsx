import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

type prop = {
  status?: "In Progress" | "Completed" | "Cancelled";
};

export default function ReviewCard({ status }: prop) {
  const [rate, setRate] = useState(false);
  return (
    <View
      style={{
        borderColor: "#EFEFEF",
        borderWidth: 1,
        borderStyle: "solid",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Image source={require("../../assets/productImage.png")} />
        <View
          style={{
            flex: 0.95,
          }}
        >
          <Text
            style={{
              color: "#464646",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 14,
            }}
          >
            Order No: 88473839293849394
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_600SemiBold",
                color: "#696666",
              }}
            >
              20 June 2023, 06:13 PM
            </Text>
            <Status status={status} />
            <AntDesign name="down" size={20} color="black" />
          </View>
          <Text
            style={{
              color: "#696666",
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
            }}
          >
            No of items: 3
          </Text>
        </View>
      </View>

      {!status ? (
        <View>
          {rate ? (
            <View style={{ backgroundColor: "#F5F5F5", padding: 20 }}>
              <TextInput
                selectionColor={"#F5F5F5"}
                multiline
                placeholder="Tell us more about your rating!"
                numberOfLines={10}
                style={{
                  color: "#F5F5F5",
                  backgroundColor: "#fff",
                  textAlignVertical: "top",
                  padding: 10,
                }}
              />
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 12,
                  fontFamily: "Poppins_600SemiBold",
                  color: "#7E7E7E",
                  marginTop: 20,
                }}
                onPress={() => setRate(false)}
              >
                Submit your review
              </Text>
            </View>
          ) : (
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                backgroundColor: "#F5F5F5",
                padding: 10,
                fontSize: 10,
                fontFamily: "Poppins_600SemiBold",
                color: "#1F1F1F",
                marginTop: 10,
              }}
              onPress={() => setRate(true)}
            >
              Rate this product Use Voucher {"  "}{" "}
              <MaterialCommunityIcons name="star-shooting-outline" />
            </Text>
          )}
        </View>
      ) : null}
    </View>
  );
}

function Status({ status }: { status?: string }) {
  return (
    <Text
      style={{
        fontSize: 12,
        fontFamily: "Poppins_500Medium",
        color: !status ? "#019D40" : "#2A347E",
      }}
    >
      {!status ? (
        <AntDesign name="lock" />
      ) : status === "In Progress" ? (
        <MaterialCommunityIcons name="progress-clock" />
      ) : status === "Completed" ? (
        <Ionicons name="checkmark-done-circle" />
      ) : status === "Cancelled" ? (
        <MaterialIcons name="cancel" />
      ) : null}{" "}
      {!status
        ? "Delivered"
        : status === "In Progress"
        ? "In Progress"
        : status === "Completed"
        ? "Completed"
        : status === "Cancelled"
        ? "Cancelled"
        : null}
    </Text>
  );
}
