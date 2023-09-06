import React from "react";
import { Text, View } from "react-native";
import Heading from "../../components/Auth/Heading";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/forms/Input";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/button";

export default function Step1() {
  const [value, setValue] = React.useState("");

  return (
    <View style={{ padding: "5%" }}>
      <Heading
        description="Let’s get down to know each other, this will enable us to satisft you better."
        title="Let’s get you onboard"
      />
      <View style={{ marginVertical: "7%" }}>
        <Input
          onChange={setValue}
          value={value}
          placeholder="Full Name"
          Icon={<Ionicons name="checkmark-circle" size={24} color="#233974" />}
        />
        <Input
          onChange={setValue}
          value={value}
          placeholder="Email Address"
          Icon={<Ionicons name="checkmark-circle" size={24} color="#233974" />}
        />
        <Input
          onChange={setValue}
          value={value}
          placeholder="Username"
          Icon={<Ionicons name="checkmark-circle" size={24} color="#233974" />}
        />
        <Input
          onChange={setValue}
          value={value}
          password
          placeholder="Phone Number"
          Icon={<Ionicons name="checkmark-circle" size={24} color="#233974" />}
        />
      </View>
      <Button title="Next" onPress={() => {}} />
      <Footer />
    </View>
  );
}
