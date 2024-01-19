import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../../screens/cart";
import Checkout from "../../../screens/Checkout";
import Header from "../../../components/header";
import { Routes } from "../../routes";
import ShippingMethod from "../../../screens/ShippingMethod";

const Stack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.My_Cart}
      screenOptions={{
        header: ({ navigation, route }) => (
          <Header title={route.name} navigation={navigation} app />
        ),
      }}
    >
      <Stack.Screen name={Routes.My_Cart} component={Cart} />
      <Stack.Screen name={Routes.Checkout} component={Checkout} />
      <Stack.Screen name={Routes.Shipping} component={ShippingMethod} />
    </Stack.Navigator>
  );
}
