import { View, Animated, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Active from "./Active";
import Used from "./Used";
import { Colors } from "../../theme/Colors";
import { useNavigation } from "@react-navigation/native";

// const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Text>hi</Text>
    // <Tab.Navigator
    //   screenOptions={() => {
    //     return {
    //       tabBarIndicatorStyle: {
    //         height: 40,
    //         backgroundColor: Colors.primaryMain,
    //         borderRadius: 20,
    //         marginBottom: 4,
    //         width: "47%",
    //         marginLeft: 4,
    //       },
    //       tabBarActiveTintColor: "white",
    //       tabBarInactiveTintColor: Colors.primaryMain,
    //       tabBarLabelStyle: {
    //         fontSize: 16,
    //         fontWeight: "bold",
    //         textTransform: "capitalize",
    //       },
    //       tabBarIndicatorContainerStyle: {},
    //       tabBarStyle: {
    //         elevation: 0,
    //         borderWidth: 1,
    //         margin: 20,
    //         borderRadius: 30,
    //         overflow: "hidden",
    //         borderColor: Colors.primaryMain,
    //       },
    //     };
    //   }}
    //   sceneContainerStyle={{ backgroundColor: "white" }}
    //   style={{ marginTop: 40 }}
    // >
    //   <Tab.Screen name="used" component={Used} />
    //   <Tab.Screen name="active" component={Active} />
    // </Tab.Navigator>
  );
}
