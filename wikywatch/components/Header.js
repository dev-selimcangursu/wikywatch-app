import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/wiky-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
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
  logo: {
    width: 120,
    height: 90,
    marginBottom: 10,
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
    textAlign:'center'
  },
});

export default Header;
