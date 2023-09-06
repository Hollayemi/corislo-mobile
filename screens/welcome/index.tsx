import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../../navigations/routes";
import Step3 from "./step3";
import Step2 from "./Step2";
import Step1 from "./Step1";

const Stack = createNativeStackNavigator();
export default function WelcomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.WelcomeStep1}>
        <Stack.Screen
          name={Routes.WelcomeStep1}
          component={Step1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.WelcomeStep2}
          component={Step2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.WelcomeStep3}
          component={Step3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
