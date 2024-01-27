import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import PhoneNumberChanged from "./PhoneNumberChanged";

export default function ChangePhoneNumber() {
  const [done, setDone] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let countdown: any;

    if (isCounting) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [isCounting]);

  const handleButtonClick = () => {
    setTimer(30);
    setIsCounting(true);

    setTimeout(() => {
      setIsCounting(false);
    }, 30000);
  };
  return (
    <>
      {!done ? (
        <View style={{ flex: 1, backgroundColor: "#fff", padding: "5%" }}>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            Previous Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#E4E4E4",
              paddingHorizontal: "5%",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 12,
                marginVertical: 10,
                color: "#1F1F1F",
                marginRight: 10,
              }}
            >
              +234
            </Text>
            <TextInput
              placeholder="8138956133"
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              keyboardType="number-pad"
              selectionColor={"#1f1f1f"}
            />
          </View>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 10,
              marginVertical: 10,
            }}
          >
            New Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#E4E4E4",
              paddingHorizontal: "5%",
              // fontSize: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 12,
                marginVertical: 10,
                color: "#1F1F1F",
                marginRight: 10,
              }}
            >
              +234
            </Text>
            <TextInput
              placeholder="8123456789"
              style={{
                backgroundColor: "transparent",
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginVertical: 10,
                color: "#1F1F1F",
                width: "90%",
              }}
              keyboardType="number-pad"
              selectionColor={"#1f1f1f"}
            />
          </View>
          <Text
            style={{
              backgroundColor: isCounting ? "#A3AAAE" : "#2A347E",
              color: "#fff",
              marginTop: 30,
              textAlign: "center",
              fontSize: 18,
              padding: "5%",
              borderRadius: 50,
              fontFamily: "Poppins_500Medium",
            }}
            onPress={handleButtonClick}
          >
            {isCounting ? ` Resend ( ${timer} )` : "Request Otp"}
          </Text>
          {isCounting ? (
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 10,
                  marginVertical: 10,
                  marginTop: 30,
                }}
              >
                Enter OTP
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#E4E4E4",
                  paddingHorizontal: "5%",
                  // fontSize: 12,
                }}
              >
                <TextInput
                  placeholder="123456"
                  style={{
                    backgroundColor: "transparent",
                    fontFamily: "Poppins_500Medium",
                    fontSize: 14,
                    marginVertical: 10,
                    color: "#1F1F1F",
                    width: "90%",
                    letterSpacing: 10,
                  }}
                  keyboardType="number-pad"
                  selectionColor={"#1f1f1f"}
                />
              </View>
            </View>
          ) : null}
        </View>
      ) : (
        <PhoneNumberChanged />
      )}
    </>
  );
}
