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
  const [visible, setVisible] = useState(true);

  // Popup İçeirk bilgileri
  const product = {
    name: "Wiky Watch 5E - Pembe",
    description:
      "Yeni nesil akıllı saat, sağlıklı yaşam takibi, uzun pil ömrü ve şık tasarım.",
    imageUrl: "http://192.168.1.23:3000/popups/wikywatch5e-pembe.webp",
    detailsUrl: "https://www.wikywatch.com.tr/wiky-watch-5e/",
  };

  const handleClose = () => setVisible(false);

  const handleDetailsPress = () => {
    Linking.openURL(product.detailsUrl);
    handleClose();
  };

  return (
    <Portal>
      <Modal visible={visible} transparent maskClosable={true} onClose={handleClose}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            {/* Kapatma ikonu */}
            <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
              <Icon name="close" size="md" color="#555" />
            </TouchableOpacity>

            {/* Ürün Görseli */}
            <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

            {/* Ürün Bilgileri */}
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>

              <TouchableOpacity
                style={styles.detailsButton}
                activeOpacity={0.8}
                onPress={handleDetailsPress}
              >
                <Text style={styles.detailsButtonText}>Detayları Gör</Text>
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
    backgroundColor: "rgba(0,0,0,0.6)", // Arka plan karartma
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContent: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: height * 0.5,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  productName: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: "#222",
    textAlign: "center",
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  detailsButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
