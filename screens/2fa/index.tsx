import React from "react";
import { Image, Text, View } from "react-native";
import { updateUserAccount } from "../../redux/state/slices/users/updateAccount";
import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useData";

export default function TwoFactorAuth({ navigation }: any) {
    const dispatch = useDispatch();
    const { userInfo } = useUserData() as any;
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                padding: "7%",
                alignItems: "center",
            }}
        >
            <Image
                source={require("../../assets/2fa.png")}
                style={{ width: 300, height: 300 }}
            />
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Poppins_600SemiBold",
                    marginVertical: "7%",
                    color: "#2A347E",
                    fontSize: 20,
                }}
            >
                Protect your account
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Poppins_400Regular",
                    marginBottom: "5%",
                    fontSize: 13,
                }}
            >
                Guarantee that it’s really you trying to access your account
                with two-factor authentication (2FA)
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Poppins_500Medium",
                    marginBottom: "5%",
                    color: "#2A347E",
                    fontSize: 15,
                }}
            >
                Process
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Poppins_400Regular",
                    marginBottom: "5%",
                    fontSize: 13,
                }}
            >
                A verification code will be sent to your registered email for
                verification.
            </Text>
            <Text
                style={{
                    backgroundColor: "#2A347E",
                    color: "#fff",
                    marginTop: 30,
                    textAlign: "center",
                    fontSize: 18,
                    padding: "3%",
                    borderRadius: 50,
                    fontFamily: "Poppins_500Medium",
                    width: "100%",
                }}
                onPress={() =>
                    updateUserAccount({ two_fa: !userInfo.two_fa }, dispatch)
                }
            >
                {userInfo.two_fa ? "Disable" : "Enable"} Two-Factor
                Authentication
            </Text>
            <Text
                style={{
                    marginTop: 20,
                    textAlign: "center",
                    fontFamily: "Poppins_500Medium",
                    color: "#1F1F1F",
                    fontSize: 14,
                }}
                onPress={() => navigation.goBack()}
            >
                Maybe Later
            </Text>
        </View>
    );
}
