import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function SalesPointCard({ name, logo }) {
  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 80,
    height: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
