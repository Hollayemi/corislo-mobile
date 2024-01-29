import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Message from "../../components/Chat/Message";

export default function UserChat() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ padding: "5%", flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ marginBottom: 60 }}>
        <Message sender />
        <Message />
        <Message sender />
        <Message />
        <Message sender />
        <Message sender />
        <Message />
        <Message sender />
        <Message sender />
        <Message />
        <Message sender />
      </ScrollView>
      <View
        style={{
          backgroundColor: "#F6F6F6",
          borderRadius: 44,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: "center",
          bottom: 10,
          position: "absolute",
          width: "100%",
          alignSelf: "center",
        }}
      >
        <MaterialIcons name="attach-file" size={24} color="#626262" />
        <TextInput
          placeholder="Write a Message"
          selectionColor={"#000"}
          multiline
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            color: "#626262",
            textAlignVertical: "top",
            width: "80%",
          }}
        />
        <FontAwesome name="send" size={24} color="#2A347E" />
      </View>
    </View>
  );
}
