import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Portal, Modal } from "@ant-design/react-native";
import Icon from "@ant-design/react-native/lib/icon";

const { width, height } = Dimensions.get("window");

export default function ProductPopup() {
  const [visible, setVisible] = useState(false);

  const product = {
    name: "Wiky Watch 5E - Pembe",
    description:
      "Yeni nesil akıllı saat: sağlıklı yaşam takibi, uzun pil ömrü ve modern tasarımıyla öne çıkıyor.",
    imageUrl: "http://192.168.36.147:3000/popups/wikywatch5e-pembe.webp",
    detailsUrl: "https://www.wikywatch.com.tr/wiky-watch-5e/",
  };

  useEffect(() => {
    // Sayfa açılır açılmaz popup'u göster
    setVisible(true);

    // 3 dakikada bir popup'u tekrar aç
    const interval = setInterval(() => {
      setVisible(true);
    }, 3 * 60 * 1000);

    // Temizlik
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => setVisible(false);

  const handleDetailsPress = () => {
    Linking.openURL(product.detailsUrl);
    handleClose();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        transparent
        maskClosable={true}
        onClose={handleClose}
        animationType="fade" // @ant-design/react-native destekliyorsa kalabilir
      >
        <View style={styles.overlay}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Icon name="close" size="md" color="#333" />
            </TouchableOpacity>

            <Image source={{ uri: product.imageUrl }} style={styles.image} />

            <View style={styles.content}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>

              <TouchableOpacity style={styles.button} onPress={handleDetailsPress}>
                <Text style={styles.buttonText}>Detayları Gör</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 9999,
  },
  card: {
    width: width * 0.9,
    maxWidth: 380,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 14,
    right: 14,
    zIndex: 2,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 8,
  },
  image: {
    width: "100%",
    height: height * 0.35,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
