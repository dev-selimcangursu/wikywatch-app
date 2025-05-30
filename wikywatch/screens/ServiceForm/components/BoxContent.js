import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CheckBox from "expo-checkbox";

const items = [
  {
    label: "Simkart",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Kutu",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Şarj Kablosu",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Kullanım Kılavuzu",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Garanti Belgesi",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Kordon Halkası",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "İç Sünger",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "İç Karton",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Şeffaf Kapak",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Mini Tornavida",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Yedek Vida",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Cımbız",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Pena",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "İtme Aparatı",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Not Kağıdı",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Mağaza Formu",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Ekran Koruyucu",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
  {
    label: "Elden Teslim Formu",
    image: require("../../../assets/images/icons/no-image.jpg"),
  },
];

export default function BoxContent({ selectedValues, onChange }) {
  const toggle = (value) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Kutu İçeriği</Text>
      <View style={styles.row}>
        {items.map((item, idx) => (
          <View key={idx} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.label}</Text>
            <CheckBox
              value={selectedValues.includes(item.label)}
              onValueChange={() => toggle(item.label)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  item: {
    width: 100,
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 4,
  },
  text: {
    fontSize: 13,
    marginBottom: 4,
  },
});
