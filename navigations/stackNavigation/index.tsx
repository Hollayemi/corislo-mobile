import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../routes";

import Product from "../../screens/product";
import BottomTabs from "../bottomTabNavigation";
import Header from "../../components/header";
import WelcomeNavigation from "../../screens/welcome";
import AuthNavigation from "../../screens/Auth";
import TopTabs from "../../screens/voucher/TopTabs";
import NotificationStack from "../../screens/notification";
import ChangePhoneNumberStack from "../../screens/changePhoneNumber";
import ChangePassword from "../../screens/changePassword";
import VerifyEmail from "../../screens/changePassword/VerifyEmail";
import CustomerSupport from "../../screens/customerSupport";
import Error from "../../screens/error";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.customerSupport}>
        <Stack.Screen
          name={Routes.Welcome}
          component={WelcomeNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.Authentication}
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.product}
          component={Product}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={route.name} />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.homeScreen}
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.voucher}
          component={TopTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.notification}
          component={NotificationStack}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={route.name} />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.changePhoneNumber}
          component={ChangePhoneNumberStack}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"Change Phone Number"} />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.changePassword}
          component={ChangePassword}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"Change Password"} />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.verifyEmail}
          component={VerifyEmail}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"Change Password"} />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.customerSupport}
          component={CustomerSupport}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"Customer Care"} />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.error}
          component={Error}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={route.name} app />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
