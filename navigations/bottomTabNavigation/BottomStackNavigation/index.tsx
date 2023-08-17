import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../../screens/cart";
import Checkout from "../../../screens/Checkout";

const Stack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <Stack.Navigator initialRouteName="MyCart">
      <Stack.Screen
        name="MyCart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
