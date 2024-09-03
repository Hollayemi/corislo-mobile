import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Active from "./Active";
import Used from "./Used";

const Tab = createMaterialTopTabNavigator();

export default function VoucherTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          tabBarIndicatorStyle: {
            backgroundColor: "#fff",
            marginBottom: 4,
            width: "47%",
            marginLeft: 4,
            borderBottomWidth: 3,
            borderBottomColor: "#2A347E",
          },
          tabBarActiveTintColor: "#2A347E",
          tabBarInactiveTintColor: "#000",
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "capitalize",
          },
          tabBarIndicatorContainerStyle: {},
          tabBarStyle: {
            elevation: 0,
            marginHorizontal: "20%",
            marginBottom: "5%",
            overflow: "hidden",
          },
        };
      }}
      sceneContainerStyle={{ backgroundColor: "white" }}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <Tab.Screen name="active" component={Active} />
      <Tab.Screen name="used" component={Used} />
    </Tab.Navigator>
  );
}
