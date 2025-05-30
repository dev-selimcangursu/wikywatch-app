import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import SalesPointCard from "./components/SalesPointCard";

const salesPoints = [
  { name: "MediaMarkt", logo: require("../../assets/images/partners/mediamarkt-logo.png") },
  { name: "Teknosa", logo: require("../../assets/images/partners/teknosa.jpg") },
  { name: "Turkcell", logo:require("../../assets/images/partners/logo.webp") },
  { name: "D&R", logo:require("../../assets/images/partners/D&R_logo.jpg") },
  { name: "Amazon", logo: require("../../assets/images/partners/amazon-logo.webp") },
  { name: "N11", logo: require("../../assets/images/partners/n11-logo.png") },
];

export default function SalesPoints() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        title="Satış Noktalarımız"
        subtitle="Wiky Watch ürünlerini aşağıdaki anlaşmalı satış noktalarımızdan temin edebilirsiniz."
      />

      <View style={styles.cardContainer}>
        {salesPoints.map((point, index) => (
          <SalesPointCard key={index} name={point.name} logo={point.logo} />
        ))}
      </View>
    </ScrollView>
  );
}
