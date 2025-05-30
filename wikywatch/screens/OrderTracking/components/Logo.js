import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/wiky-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 120,
  },
});
