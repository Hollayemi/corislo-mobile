import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../routes";

import Product from "../../screens/product";
import BottomTabs from "../bottomTabNavigation";
import Header from "../../components/header";
import WelcomeNavigation from "../../screens/welcome";
import AuthNavigation from "../../screens/Auth";
import NotificationStack from "../../screens/notification";
import ChangePhoneNumberStack from "../../screens/changePhoneNumber";
import ChangePassword from "../../screens/changePassword";
import VerifyEmail from "../../screens/changePassword/VerifyEmail";
import CustomerSupport from "../../screens/customerSupport";
import Error from "../../screens/error";
import VoucherTopTabs from "../../screens/voucher/TopTabs";
import SavedItems from "../../screens/savedItems";
import ChatsList from "../../screens/Chat";
import UserChat from "../../screens/Chat/UserChat";
import Review from "../../screens/reviews";
import Order from "../../screens/order";
import OrderDetail from "../../screens/order/OrderDetail";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.orderDetails}>
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
          component={VoucherTopTabs}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={route.name} app />
            ),
          }}
          // options={{ headerShown: false }}
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
        <Stack.Screen
          name={Routes.savedItems}
          component={SavedItems}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"Saved Items"} app />
            ),
          }}
        />

        <Stack.Screen
          name={Routes.chat}
          component={UserChat}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"User name"} app />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.review}
          component={Review}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={route.name} app />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.order}
          component={Order}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={route.name} app />
            ),
          }}
        />
        <Stack.Screen
          name={Routes.orderDetails}
          component={OrderDetail}
          options={{
            header: ({ navigation, route }) => (
              <Header navigation={navigation} title={"Order Details"} app />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
