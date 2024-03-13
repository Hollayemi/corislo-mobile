import React from "react";
import { FlatList, Text, View } from "react-native";
import HomeHeader from "../../navigations/bottomTabNavigation/HomeHeader";
import {
  accountManagement,
  accountManagement1,
  notificatiionPrefernce,
  productManagement,
} from "./profileList";
import ProfileBox from "./ProfileBox";
import { AntDesign } from "@expo/vector-icons";

export default function Profile() {
  return (
    <FlatList
      contentContainerStyle={{
        // padding: "5%",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
      }}
      style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: "5%" }}
      ListHeaderComponent={
        <>
          <HomeHeader settings />
          <Text
            style={{
              padding: 20,
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              color: "#464646",
              backgroundColor: "#fff",
            }}
          >
            Product Management
          </Text>
          <FlatList
            contentContainerStyle={{
              padding: "5%",
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
            }}
            // ListHeaderComponent={}
            data={productManagement}
            renderItem={({ item, index }) => (
              <ProfileBox
                {...item}
                last={index === productManagement.length - 1 ? true : false}
              />
            )}
          />
          <Text
            style={{
              padding: 20,
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              color: "#464646",
              backgroundColor: "#fff",
            }}
          >
            Account Management
          </Text>
          <FlatList
            contentContainerStyle={{
              padding: "5%",
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
            }}
            // ListHeaderComponent={}
            data={accountManagement}
            renderItem={({ item, index }) => (
              <ProfileBox
                {...item}
                last={index === productManagement.length - 1 ? true : false}
              />
            )}
          />
          <Text
            style={{
              padding: 20,
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              color: "#464646",
              backgroundColor: "#fff",
            }}
          >
            Notification Preferences
          </Text>
          <FlatList
            contentContainerStyle={{
              padding: "5%",
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
            }}
            // ListHeaderComponent={}
            data={notificatiionPrefernce}
            renderItem={({ item, index }) => (
              <ProfileBox
                {...item}
                last={index === productManagement.length - 1 ? true : false}
              />
            )}
          />
          <Text
            style={{
              padding: 20,
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              color: "#464646",
              backgroundColor: "#fff",
            }}
          >
            Shipping Address
          </Text>
          <FlatList
            contentContainerStyle={{
              padding: "5%",
              backgroundColor: "#F5F5F5",
              borderRadius: 10,
            }}
            // ListHeaderComponent={}
            data={productManagement}
            renderItem={({ item, index }) => (
              <ProfileBox
                {...item}
                last={index === productManagement.length - 1 ? true : false}
              />
            )}
          />
          <Text
            style={{
              padding: 20,
              fontFamily: "Poppins_500Medium",
              fontSize: 12,
              color: "#464646",
              backgroundColor: "#fff",
            }}
          >
            Account Management
          </Text>
        </>
      }
      data={accountManagement1}
      renderItem={({ item, index }) => (
        <ProfileBox
          {...item}
          last={index === productManagement.length - 1 ? true : false}
        />
      )}
      ListFooterComponent={
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: "5%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#2E2E2E",
              fontFamily: "Poppins_500Medium",
              fontSize: 13,
            }}
          >
            Log Out
          </Text>
          <AntDesign name="logout" size={24} color="black" />
        </View>
      }
    />
  );
}
