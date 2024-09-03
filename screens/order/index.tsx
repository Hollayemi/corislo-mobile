import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import Cancelled from "./Cancelled";

const Tab = createMaterialTopTabNavigator();

export default function Order() {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          tabBarIndicatorStyle: {
            backgroundColor: "#fff",
            marginBottom: 4,
            width: "30%",
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
            marginHorizontal: "10%",
            marginBottom: "5%",
            overflow: "hidden",
          },
        };
      }}
      sceneContainerStyle={{ backgroundColor: "white" }}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <Tab.Screen name="Ongoing" component={Ongoing} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Cancelled" component={Cancelled} />
    </Tab.Navigator>
  );
}
