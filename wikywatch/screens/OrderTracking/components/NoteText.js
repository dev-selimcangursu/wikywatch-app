import React from "react";
import { Text, StyleSheet } from "react-native";

export default function NoteText({ children }) {
  return <Text style={styles.note}>{children}</Text>;
}

const styles = StyleSheet.create({
  note: {
    marginTop: 16,
    fontSize: 13,
    color: "#777",
    textAlign: "center",
  },
});
