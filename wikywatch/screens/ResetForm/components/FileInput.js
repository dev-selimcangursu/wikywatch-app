import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../../../components/AppButton";
import * as DocumentPicker from "expo-document-picker";

export default function FileInput({ label, file, onFileChange }) {
  const pickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    type: ["image/*", "application/pdf"],
    copyToCacheDirectory: true,
    multiple: false,
  });

  console.log("Seçilen dosya:", result);

  if (!result.canceled && result.assets && result.assets.length > 0) {
    const asset = result.assets[0];
    const selectedFile = {
      name: asset.name,
      uri: asset.uri,
      type: asset.mimeType || "application/octet-stream",
    };
    console.log("İşlenen dosya:", selectedFile);
    onFileChange(selectedFile);
  } else {
    onFileChange(null);
  }
};

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <AppButton title={file ? file.name : "Dosya Seç"} onPress={pickDocument} />
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
});
