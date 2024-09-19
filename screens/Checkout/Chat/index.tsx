import MessageView from "../../components/Chat/MessageView";
import SearchBox from "../../components/search";
import { Colors } from "../../theme/Colors";
import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

export default function ChatsList() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <SearchBox placeholder="Search for messages or stores" />
      </View>
      <FlatList
        contentContainerStyle={{ marginVertical: "2%", marginBottom: "10%" }}
        data={[0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6]}
        renderItem={() => (
          <View style={{ paddingHorizontal: 10 }}>
            <MessageView />
          </View>
        )}
      />
    </View>
  );
}
