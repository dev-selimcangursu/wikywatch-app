import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        <TouchableOpacity
          key={idx}
          style={styles.optionWrapper}
          activeOpacity={0.8}
          onPress={() => toggle(opt.value)}
        >
          <CheckBox
            value={selectedValues.includes(opt.value)}
            onValueChange={() => toggle(opt.value)}
          />
          <Text style={styles.label}>{opt.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginBottom: 12,
    paddingRight: 8,
  },
  label: {
    marginLeft: 10,
    fontSize: 12,
    flexShrink: 1,
    flexWrap: "wrap",
  },
});
