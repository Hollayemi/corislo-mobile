import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/header";
import { Routes } from "../../navigations/routes";
import NotificationAccess from "./Access";
import NotificationList from "./List";
import NotificationDetails from "./Details";

const Stack = createNativeStackNavigator();
export default function NotificationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routes.notificationAccess}
        component={NotificationAccess}
      />
      <Stack.Screen
        name={Routes.notificationDetails}
        component={NotificationDetails}
      />
      <Stack.Screen
        name={Routes.notificationList}
        component={NotificationList}
      />
    </Stack.Navigator>
  );
}
