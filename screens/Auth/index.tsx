import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../navigations/routes";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Verify from "./Verify";

const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={Routes.WelcomeStep1}>
      <Stack.Screen
        name={Routes.AuthenticationStep1}
        component={Step1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.AuthenticationStep2}
        component={Step2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.AuthenticationVerify}
        component={Verify}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
