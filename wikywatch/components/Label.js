import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Label({ children }) {
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
  },
});
