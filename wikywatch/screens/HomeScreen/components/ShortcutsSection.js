import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const shortcutsData = [
  {
    id: "1",
    name: "Teknik Servis Kayıt Formu",
    img: require("../../../assets/images/icons/teknik-servis-icon.png"),
    screen: "TeknikServisKayitFormu",
  },
  {
    id: "2",
    name: "Servis Durum Sorgulama",
    img: require("../../../assets/images/icons/service-query.png"),
    screen: "ServisDurumSorgulama",
  },
  {
    id: "3",
    name: "Wiky Watch Sıfırlama Formu",
    img: require("../../../assets/images/icons/service-reset.png"),
    screen: "WikyWatchSifirlamaFormu",
  },
  {
    id: "4",
    name: "Servis Ödeme Formu",
    img: require("../../../assets/images/icons/service-payment-query.png"),
    screen: "ServisOdemeFormu",
  },
  {
    id: "5",
    name: "Teknik Servis Destek",
    img: require("../../../assets/images/icons/service-call-center.png"),
    screen: "TeknikServisDestek",
  },
  {
    id: "6",
    name: "Satış Destek Hizmet",
    img: require("../../../assets/images/icons/sales-call-center.png"),
    screen: "SatisHizmet",
  },
];

const { width } = Dimensions.get("window");
const cardSize = (width - 48) / 3;

export default function ShortcutsSection({ navigation }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.title}>Kısayollar</Text>
      <View style={styles.container}>
        {shortcutsData.map((shortcut) => (
          <TouchableOpacity
            key={shortcut.id}
            style={styles.card}
            onPress={() => navigation.navigate(shortcut.screen)}
          >
            <Image source={shortcut.img} style={styles.image} />
            <Text style={styles.name}>{shortcut.name}</Text>
          </TouchableOpacity>
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
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 44,
    height: 64,
    marginBottom: 8,
    resizeMode: "contain",
  },
  name: {
    fontSize: 11,
    color: "#333",
    textAlign: "center",
  },
});
