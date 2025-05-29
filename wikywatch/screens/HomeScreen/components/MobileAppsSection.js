import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const appsData = [
  {
    id: "1",
    name: "Setracker",
    img: require("../../../assets/images/app/setracker.jpeg"),
  },
  {
    id: "2",
    name: "Setracker 2",
    img: require("../../../assets/images/app/setracker2.webp"),
  },
  {
    id: "3",
    name: "Wiky Safe",
    img: require("../../../assets/images/app/safe.webp"),
  },
  {
    id: "4",
    name: "Wiky Care",
    img: require("../../../assets/images/app/care.webp"),
  },
  {
    id: "5",
    name: "Wiky Tracker",
    img: require("../../../assets/images/app/wiky-tracker.png"),
  },
];

const { width } = Dimensions.get("window");
const cardSize = (width - 48) / 5;

export default function MobileAppsSection() {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.title}>Mobil Uygulamalarımız</Text>
      <View style={styles.container}>
        {appsData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 12,
    color: "#222",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: cardSize,

    alignItems: "center",
  },
  image: {
    width: cardSize * 0.8,
    height: cardSize * 0.8,
    resizeMode: "contain",
    marginBottom: 6,
  },
  name: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
  },
});
