import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";

export default function CheckBoxGroup({ options, selectedValues, onChange }) {
  const toggle = (value) => {
    const isSelected = selectedValues.includes(value);
    if (isSelected) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((opt, idx) => (
        <View key={idx} style={styles.optionWrapper}>
          <CheckBox
            value={selectedValues.includes(opt.value)}
            onValueChange={() => toggle(opt.value)}
          />
          <Text style={styles.text}>{opt.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
  },
});
