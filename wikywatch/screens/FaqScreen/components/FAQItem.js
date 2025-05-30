import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setOpen(!open)}>
      <View style={styles.header}>
        <Text style={styles.question}>{question}</Text>
        <AntDesign
          name={open ? "up" : "down"}
          size={20}
          color="#1a1a1a"
        />
      </View>
      {open && <Text style={styles.answer}>{answer}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    paddingRight: 10,
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: "#444",
  },
});
