import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";

export default function CheckBoxGroup({
  label,
  options,
  selectedValues,
  onChange,
}) {
  const toggle = (value) => {
    const isSelected = selectedValues.includes(value);
    if (isSelected) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 6,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap", // Alt satıra geçmek için
  },
  optionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%", // Her satırda 2 checkbox yan yana için %50 genişlik
    marginBottom: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
  },
});
