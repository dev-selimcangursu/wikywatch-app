import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input({ label, value, onChangeText, keyboardType = "default" }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={label}
        placeholderTextColor="#b2bec3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#2d3436",
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
