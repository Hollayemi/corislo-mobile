import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  stepContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    position: "relative",
  },
  stepWrapper: {
    alignItems: "center",
    position: "relative",
  },
  stepStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderWidth: 3,
    position: "relative",
  },
  stepCount: {
    fontSize: 19,
    color: "#f3e7f3",
  },
  stepsLabelContainer: {
    position: "absolute",
    top: 66,
  },
  stepLabel: {
    fontSize: 19,
    color: "#4a154b",
  },
  line: {
    position: "absolute",
    width: 4,
    backgroundColor: "#f3e7f3",
    height: "100%",
    // right: "-50%",
    transform: [{ translateY: -2 }],
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    marginTop: 100,
  },
  buttonStyle: {
    borderRadius: 4,
    backgroundColor: "#4a154b",
    padding: 8,
    width: 90,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
  },
  checkMark: {
    fontSize: 26,
    fontWeight: "600",
    color: "#4a154b",
  },
});

const steps = [
  {
    label: "Address",
    step: 1,
  },
  {
    label: "Shipping",
    step: 2,
  },
  {
    label: "Payment",
    step: 3,
  },
  {
    label: "Summary",
    step: 4,
  },
];

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.stepContainer}>
        {steps.map(({ step, label }) => (
          <View key={step} style={styles.stepWrapper}>
            <View
              style={[
                styles.stepStyle,
                { borderColor: activeStep >= step ? "#4A154B" : "#F3E7F3" },
              ]}
            >
              {activeStep > step ? (
                <Text style={styles.checkMark}>✓</Text>
              ) : (
                <Text style={styles.stepCount}>{step}</Text>
              )}
            </View>
            <View style={styles.stepsLabelContainer}>
              <Text style={styles.stepLabel}>{label}</Text>
            </View>
          </View>
        ))}
        <View style={styles.line} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: activeStep === 1 ? "#f3e7f3" : "#4a154b" },
          ]}
          onPress={prevStep}
          disabled={activeStep === 1}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor:
                activeStep === totalSteps ? "#f3e7f3" : "#4a154b",
            },
          ]}
          onPress={nextStep}
          disabled={activeStep === totalSteps}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressSteps;
