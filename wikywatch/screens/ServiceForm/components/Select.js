import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Select({
  label,
  selectedValue,
  onValueChange,
  options,
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
          dropdownIconColor="#666"
        >
          <Picker.Item label={`Lütfen ${label} seçiniz`} value="" />
          {options.map((opt, idx) => (
            <Picker.Item
              key={idx}
              label={opt.label || opt}
              value={opt.value || opt}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  picker: {},
});
