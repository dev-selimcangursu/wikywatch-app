import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function FileInput({ label, file, onFileChange }) {
  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/*", "application/pdf"],
      copyToCacheDirectory: true,
    });
    if (result.type === "success") {
      onFileChange(result);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.button} onPress={pickDocument} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{file ? file.name : "Dosya Seç"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 22,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#2d3436",
  },
  button: {
    backgroundColor: "#0984e3",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#0984e3",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
