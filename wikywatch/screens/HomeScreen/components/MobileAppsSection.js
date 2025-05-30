import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  Platform,
  TouchableOpacity,
} from "react-native";

const appsData = [
  {
    id: "1",
    name: "Setracker",
    img: require("../../../assets/images/app/setracker.jpeg"),
    androidScheme: "setracker://",
    iosScheme: "setracker://",
    androidStore: "market://details?id=com.pty.sdk",
    iosStore: "https://apps.apple.com/app/id966628456",
  },
  {
    id: "2",
    name: "Setracker 2",
    img: require("../../../assets/images/app/setracker2.webp"),
    androidScheme: "setracker2://",
    iosScheme: "setracker2://",
    androidStore: "market://details?id=com.pty.sdk2",
    iosStore: "https://apps.apple.com/app/id1234567890",
  },
  {
    id: "3",
    name: "Wiky Safe",
    img: require("../../../assets/images/app/safe.webp"),
    androidScheme: "wikysafe://",
    iosScheme: "wikysafe://",
    androidStore: "market://details?id=com.wiky.safe",
    iosStore: "https://apps.apple.com/app/id2345678901",
  },
  {
    id: "4",
    name: "Wiky Care",
    img: require("../../../assets/images/app/care.webp"),
    androidScheme: "wikycare://",
    iosScheme: "wikycare://",
    androidStore: "market://details?id=com.wiky.care",
    iosStore: "https://apps.apple.com/app/id3456789012",
  },
  {
    id: "5",
    name: "Wiky Tracker",
    img: require("../../../assets/images/app/wiky-tracker.png"),
    androidScheme: "wikytracker://",
    iosScheme: "wikytracker://",
    androidStore: "market://details?id=com.wiky.tracker",
    iosStore: "https://apps.apple.com/app/id4567890123",
  },
];

const { width } = Dimensions.get("window");
const cardSize = (width - 48) / 5;

export default function MobileAppsSection() {
  const openApp = async (item) => {
    const scheme = Platform.OS === "android" ? item.androidScheme : item.iosScheme;
    const storeUrl = Platform.OS === "android" ? item.androidStore : item.iosStore;

    try {
      const supported = await Linking.canOpenURL(scheme);
      if (supported) {
        await Linking.openURL(scheme);
      } else {
        await Linking.openURL(storeUrl);
      }
    } catch (error) {
      console.warn("Uygulama açılamadı:", error);
      await Linking.openURL(storeUrl);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.title}>Mobil Uygulamalarımız</Text>
      <View style={styles.container}>
        {appsData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => openApp(item)}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
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
