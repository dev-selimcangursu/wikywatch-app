import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "./Logo"; 
const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fc',
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: 'center',
  },
});

export default Header;
