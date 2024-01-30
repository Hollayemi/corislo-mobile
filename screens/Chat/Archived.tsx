import React from "react";
import { FlatList, View, Text } from "react-native";
import MessageView from "../../components/Chat/MessageView";

export default function Archived() {
  return (
    <View>
      <FlatList
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
