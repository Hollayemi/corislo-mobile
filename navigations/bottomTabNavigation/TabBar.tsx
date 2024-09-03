import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface MyTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}
export default function TabBar({
  state,
  descriptors,
  navigation,
}: MyTabBarProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 15,
        backgroundColor: "#fff",
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const Icon = options.tabBarIcon;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
            }}
            key={route.key}
            activeOpacity={0.5}
          >
            <Icon
              color={isFocused ? "#2A347E" : "#A3AAAE"}
              size={20}
              focused={isFocused}
            />
            <Text
              style={{
                color: isFocused ? "#2A347E" : "#A3AAAE",
                fontWeight: "600",
                fontSize: 10,
                marginTop: 5,
              }}
            >
              {options.tabBarLabel}
            </Text>
            {isFocused ? (
              <Text
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 5 / 2,
                  backgroundColor: "#2A347E",
                }}
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
