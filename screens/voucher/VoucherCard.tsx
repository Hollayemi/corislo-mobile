import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type prop = {
  name: string;
  date: string;
  applicable: string;
  percent: string;
  active?: boolean;
};

export default function VoucherCard({
  applicable,
  date,
  name,
  percent,
  active,
}: prop) {
  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#1C2534",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 10,
              }}
            >
              Voucher Code:{"  "}
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins_700Bold",
                  color: "#1f1f1f",
                  marginLeft: 10,
                }}
              >
                {name}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 7,
                fontFamily: "Poppins_500Medium",
                color: "#424242",
                marginLeft: 10,
              }}
            >
              Copy <MaterialIcons name="content-copy" size={7} />
            </Text>
          </View>
          <Text
            style={{
              color: "#424242",
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
            }}
          >
            Valid until:{"  "}
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {date}
            </Text>
          </Text>
          <Text
            style={{
              color: "#424242",
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
            }}
          >
            Applicable to product over {"  "}
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
              }}
            >
              {applicable}
            </Text>
          </Text>
        </View>
        <Text
          style={{
            color: "#2A347E",
            fontSize: 38,
            fontFamily: "Poppins_700Bold",
          }}
        >
          {percent}
        </Text>
      </View>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: active ? "#FDB415" : "#D9D9D9",
          padding: 10,
          fontSize: 10,
          fontFamily: "Poppins_600SemiBold",
          color: active ? "#fff" : "#1F1F1F",
          marginTop: 10,
        }}
      >
        Use Voucher
      </Text>
    </View>
  );
}
