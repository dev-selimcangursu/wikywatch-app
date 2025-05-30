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
  );
}

const styles = StyleSheet.create({
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  picker: {},
});
