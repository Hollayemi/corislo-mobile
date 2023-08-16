import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../../screens/tabsHome";

const Stack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <Stack.Navigator initialRouteName="My Cart">
      <Stack.Screen
        name="My Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
