import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../../screens/cart";
import Checkout from "../../../screens/Checkout";
import Header from "../../../components/header";

const Stack = createNativeStackNavigator();

export default function CartStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="My Cart"
      screenOptions={{
        header: ({ navigation, route }) => (
          <Header title={route.name} navigation={navigation} app />
        ),
      }}
    >
      <Stack.Screen name="My Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
