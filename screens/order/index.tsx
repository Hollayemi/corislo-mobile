import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import Cancelled from "./Cancelled";
import { ScrollView, View } from "react-native";
import SearchBox from "../../components/search";
import { useEffect, useState } from "react";
import { style } from "../../style";
import useSWR from "swr";
import Loader from "../../components/loader";

const Tab = createMaterialTopTabNavigator();

export default function Order() {
    const [search, setSearch] = useState("");
    const { data: result, isLoading } = useSWR(`/user/order?status=All`);

    const fetchedOrder = result?.data || [];
    const [dateInterval, setDateInterval] = useState(
        "March 2023 - October 2023"
    );
    const [clipboard, setIsCopied] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredOrder, setFilteredOrder] = useState([]);

    const handleFilter = (input: any) => {
        setSearchQuery(input);
        if (fetchedOrder.length) {
            const searchFilterFunction = (order: any) =>
                order.store.toLowerCase().includes(input.toLowerCase()) ||
                order.orderSlug.toLowerCase().includes(input.toLowerCase()) ||
                order.items.tracker.toLowerCase().includes(input.toLowerCase());
            const filteredOrdersArr = fetchedOrder.filter(searchFilterFunction);
            setFilteredOrder(filteredOrdersArr);
        }
    };

    const ongoing = fetchedOrder.filter(
        (x: any) => !["Cancelled", "Completed"].includes(x.currStatus) && x
    );

    const cancelled = fetchedOrder.filter(
        (x: any) => x.currStatus === "Cancelled" && x
    );

    const completed = fetchedOrder.filter(
        (x: any) => x.currStatus === "Completed" && x
    );

    return (
        <View style={{ ...style.container, padding: "4%" }}>
            <SearchBox
                placeholder="What are you looking for?"
                mystyles={{ height: 50 }}
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
            />

            {!isLoading ? (
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
                                fontWeight: "400",
                                textTransform: "capitalize",
                            },
                            tabBarIndicatorContainerStyle: {},
                            tabBarStyle: {
                                elevation: 0,
                                marginBottom: "5%",
                                overflow: "hidden",
                            },
                        };
                    }}
                    sceneContainerStyle={{ backgroundColor: "white" }}
                    style={{ flex: 1, backgroundColor: "#fff" }}
                >
                    <Tab.Screen
                        name="Ongoing"
                        component={Ongoing}
                        initialParams={{
                            data: ongoing,
                        }}
                    />
                    <Tab.Screen
                        name="Completed"
                        component={Completed}
                        initialParams={{
                            data: completed,
                        }}
                    />
                    <Tab.Screen
                        name="Cancelled"
                        component={Cancelled}
                        initialParams={{
                            data: cancelled,
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Loader />
            )}
        </View>
    );
}
