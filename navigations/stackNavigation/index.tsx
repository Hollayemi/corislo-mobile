import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../routes";

import Product from "../../screens/product";
import BottomTabs from "../bottomTabNavigation";
import Header from "../../components/header";
import WelcomeNavigation from "../../screens/welcome";
import AuthNavigation from "../../screens/Auth";
import NotificationStack from "../../screens/notification";
import ChangePhoneNumberStack from "../../screens/changePhoneNumber";
import ChangePassword from "../../screens/changePassword";
import CustomerSupport from "../../screens/customerSupport";
import Error from "../../screens/error";
import VoucherTopTabs from "../../screens/voucher/TopTabs";
import SavedItems from "../../screens/savedItems";
import UserChat from "../../screens/Chat/UserChat";
import Review from "../../screens/reviews";
import Order from "../../screens/order";
import OrderDetail from "../../screens/order/OrderDetail";
import ChangeEmail from "../../screens/changeEmail";
import TwoFactorAuth from "../../screens/2fa";
import DeleteAccount from "../../screens/DeleteAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserData } from "../../hooks/useData";
import { jsonHeader } from "../../redux/state/slices/api/setAuthHeaders";
import PickersList from "../../screens/Pickers";
import NewPicker from "../../screens/Pickers/newPicker";
import Addresses from "../../screens/Address";
import NewAddress from "../../screens/Address/newAddress";
import Map from "../../screens/map";
import PaymentOption from "../../screens/payment";
import OrderConfirmation from "../../screens/payment/confirmation";
import RecentlyViewed from "../../screens/RecentlyViewed";
import Verify from "../../screens/Auth/Verify";
import EmailChanged from "../../screens/changeEmail/EmailChanged";
import PasswordChanged from "../../screens/changePassword/PasswordChanged";
import Search from "../../screens/Search";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [user, setUser] = React.useState("");
    const { userInfo, token, loading, isOffline } = useUserData() as any;
    const getUser = async () => {
        return await AsyncStorage.getItem("user_token").then((usr) =>
            setUser(usr!)
        );
    };
    React.useEffect(() => {
        getUser();
    }, [getUser]);

    console.log(isOffline);
    return (
        !loading && (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={
                        !isOffline ? Routes.homeScreen : Routes.Login
                    }
                >
                    <Stack.Screen
                        name={Routes.Welcome}
                        component={WelcomeNavigation}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routes.Authentication}
                        component={AuthNavigation}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routes.product}
                        component={Product}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.params}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.homeScreen}
                        component={BottomTabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routes.homeScreen}
                        component={Search}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routes.voucher}
                        component={VoucherTopTabs}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                        // options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routes.notification}
                        component={NotificationStack}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.changePhoneNumber}
                        component={ChangePhoneNumberStack}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Change Phone Number"}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.changePassword}
                        component={ChangePassword}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Change Password"}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.PasswordChanged}
                        component={PasswordChanged}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Change Password"}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.changeEmail}
                        component={ChangeEmail}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Change Email Address"}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.EmailChanged}
                        component={EmailChanged}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header navigation={navigation} title={""} />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.AuthenticationVerify}
                        component={Verify}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name={Routes.customerSupport}
                        component={CustomerSupport}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Customer Care"}
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.error}
                        component={Error}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.savedItems}
                        component={SavedItems}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Saved Items"}
                                    app
                                />
                            ),
                        }}
                    />

                    <Stack.Screen
                        name={Routes.chat}
                        component={UserChat}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"User name"}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.review}
                        component={Review}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.order}
                        component={Order}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.orderDetails}
                        component={OrderDetail}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Order Details"}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.twoFactorAuth}
                        component={TwoFactorAuth}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Two-Factor Authentication"}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.deleteAccount}
                        component={DeleteAccount}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={"Delete Account"}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.pickers}
                        component={PickersList}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.addPickers}
                        component={NewPicker}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.addresses}
                        component={Addresses}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.addAddresses}
                        component={NewAddress}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.map}
                        component={Map}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.paymentOption}
                        component={PaymentOption}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.orderConfirmation}
                        component={OrderConfirmation}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                    noBack
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.recentlyViewed}
                        component={RecentlyViewed}
                        options={{
                            header: ({ navigation, route }) => (
                                <Header
                                    navigation={navigation}
                                    title={route.name}
                                    app
                                />
                            ),
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    );
}
