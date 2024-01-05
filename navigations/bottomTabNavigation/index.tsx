import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/tabsHome";
import Category from "../../screens/category";
import Profile from "../../screens/profile";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import TabBar from "./TabBar";
import Header from "./Header";
import CartStackScreen from "./BottomStackNavigation";
import { useAppSelector } from "../../hooks";
import { Routes } from "../routes";
import Inbox from "../../screens/inbox";
import HomeHeader from "./BottomStackNavigation/HomeHeader";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { cartLabel } = useAppSelector((state) => state.cart);

  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Cart"
    >
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "ios-home-sharp" : "ios-home-outline"}
              size={size}
              color={color}
            />
          ),
          header: (props) => <HomeHeader {...props} />,
        }}
      />
      <Tab.Screen
        name={Routes.Category}
        component={Category}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign
                name={focused ? "appstore1" : "appstore-o"}
                size={size}
                color={color}
              />
            );
          },
          header: (props) => <HomeHeader {...props} category />,
        }}
      />
      <Tab.Screen
        name={Routes.Cart}
        component={CartStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: cartLabel,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? "cart-sharp" : "cart-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.inbox}
        component={Inbox}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "message-badge" : "message-badge-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <FontAwesome5
                name={focused ? "user-alt" : "user"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
