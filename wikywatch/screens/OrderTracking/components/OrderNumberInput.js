import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function OrderNumberInput({ value, onChange }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Sipariş Numarası</Text>
      <TextInput
        style={styles.input}
        placeholder="Sipariş numaranızı giriniz"
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
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
