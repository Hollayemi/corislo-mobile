import React from "react";
import { View, StyleSheet, Animated } from "react-native";

const Loader = () => {
  // Create an animated value for the animation
  const spinValue = new Animated.Value(0);

  // Configure the animation
  Animated.loop(
    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.timing(spinValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ])
  ).start();

  // Create an animated style based on the spinValue
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.loaderContainer}>
      <Animated.View
        style={[
          styles.loader,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      >
        <View style={styles.loaderDot} />
        <View style={styles.loaderDot} />
        <View style={styles.loaderDot} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 80,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loaderDot: {
    width: 10,
    height: 10,
    backgroundColor: "#2A347E",
    borderRadius: 8,
  },
});

export default Loader;
