import React from "react";
import { View, Text, FlatList } from "react-native";
import NotificationBox from "./NotificationBox";

export default function Notification() {
  return (
    <View style={{ padding: "5%", backgroundColor: "#fff" }}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              fontSize: 11,
              color: "#1f1f1f",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Today
          </Text>
        }
        data={[0, 1, 2, 3, 4.5]}
        renderItem={() => (
          <>
            <NotificationBox />
          </>
        )}
        ListFooterComponent={
          <>
            <Text
              style={{
                fontSize: 11,
                color: "#1f1f1f",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Yesterday
            </Text>
            <FlatList
              data={[0, 1, 2, 3, 4.5]}
              renderItem={() => <NotificationBox />}
            />
            <Text
              style={{
                fontSize: 11,
                color: "#1f1f1f",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Last Week
            </Text>
            <FlatList
              data={[0, 1, 2, 3, 4, 5, 6]}
              renderItem={() => <NotificationBox />}
            />
          </>
        }
      />
    </View>
  );
}
