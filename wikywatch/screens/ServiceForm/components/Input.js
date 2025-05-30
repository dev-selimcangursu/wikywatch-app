import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  placeholder = "",
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
});
