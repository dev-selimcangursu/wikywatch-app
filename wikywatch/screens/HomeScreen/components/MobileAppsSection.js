import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { fetchApps } from "../../../redux/slices/appsSlice";

// Ekran genişliğini alıyoruz ve kart genişliğini hesaplıyoruz
const { width } = Dimensions.get("window");
const cardSize = (width - 48) / 5; // 5 kart yan yana sığacak şekilde boyutlandırma

export default function MobileAppsSection() {
  const dispatch = useDispatch();

  // Redux store'dan apps, loading ve error state'lerini alıyoruz
  const { apps, loading, error } = useSelector((state) => state.apps);

  // Bileşen yüklendiğinde apps listesini API'den çekme
  useEffect(() => {
    dispatch(fetchApps());
  }, [dispatch]);

  // Uygulamaya tıklanınca çalışacak fonksiyon
  const openApp = async (item) => {
    // Platforma göre uygulama açma linki
    const scheme =
      Platform.OS === "android" ? item.androidScheme : item.iosScheme;
    const storeUrl =
      Platform.OS === "android" ? item.androidStore : item.iosStore;

    try {
      // Cihazda uygulama yüklü mü kontrol et
      const supported = await Linking.canOpenURL(scheme);
      if (supported) {
        // Yüklüyse uygulamayı aç
        await Linking.openURL(scheme);
      } else {
        // Yüklü değilse mağaza linkine yönlendir
        await Linking.openURL(storeUrl);
      }
    } catch (error) {
      console.warn("Uygulama açılamadı:", error);
      // Her durumda mağaza linkine yönlendir
      await Linking.openURL(storeUrl);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>Hata: {error}</Text>;
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.title}>Mobil Uygulamalarımız</Text>
      <View style={styles.container}>
        {apps.map((item) => (
          <TouchableOpacity
            key={item._id}
            style={styles.card}
            onPress={() => openApp(item)}
          >
            <Image
              source={{ uri: `http://192.168.1.23:3000/app/${item.img}` }}
              style={styles.image}
            />
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
