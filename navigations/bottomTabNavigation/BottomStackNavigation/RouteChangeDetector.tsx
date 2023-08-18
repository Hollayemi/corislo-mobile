import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../hooks";
import { cartActions } from "../../../store/cartSlice";

const RouteChangeDetector: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "state",
      (e: {
        data: { state: { routes: { name: string }[]; index: number } };
      }) => {
        // Handle the route change here
        const { routes, index } = e.data.state;
        const currentRoute = routes[index].name;
        console.log("Route changed to:", currentRoute);
        // You can perform any actions or updates based on the route change
        dispatch(cartActions.setCartLabel(currentRoute));
      }
    );

    return () => {
      unsubscribe(); // Clean up the subscription when the component unmounts
    };
  }, [navigation]);

  return null; // This component doesn't render anything
};

export default RouteChangeDetector;
