import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Textarea({
  value,
  onChangeText,
  placeholder,
  ...props
}) {
  return (
    <TextInput
      style={styles.textarea}
      multiline
      numberOfLines={4}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      textAlignVertical="top"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textarea: {
    borderColor: "#ccc",
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    height: 85,
    fontSize: 16,
    textAlignVertical: "top",
  },
});
