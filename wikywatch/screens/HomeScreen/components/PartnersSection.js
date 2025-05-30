import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const partnersData = [
  { id: "1", img: require("../../../assets/images/partners/amazon-logo.webp") },
  { id: "2", img: require("../../../assets/images/partners/D&R_logo.jpg") },
  { id: "3", img: require("../../../assets/images/partners/logo.webp") },
  {
    id: "4",
    img: require("../../../assets/images/partners/mediamarkt-logo.png"),
  },
  { id: "5", img: require("../../../assets/images/partners/n11-logo.png") },
  { id: "6", img: require("../../../assets/images/partners/teknosa.jpg") },
];

const { width } = Dimensions.get("window");
const logosPerSlide = 3;
const slideWidth = width - 32;

export default function PartnersSection() {
  // Partnerleri logosPerSlide'lık gruplara bölüyoruz
  const groupedPartners = [];
  for (let i = 0; i < partnersData.length; i += logosPerSlide) {
    groupedPartners.push(partnersData.slice(i, i + logosPerSlide));
  }

  return (
    <View style={{ marginBottom: 20, height: 100 }}>
      <Text style={styles.title}>Satış Noktalarımız</Text>
      <Swiper
        autoplay
        autoplayTimeout={3}
        loop
        showsPagination={false}
        style={{}}
        containerStyle={{}}
      >
        {groupedPartners.map((group, index) => (
          <View key={index} style={styles.slide}>
            {group.map((partner) => (
              <View key={partner.id} style={styles.logoContainer}>
                <Image source={partner.img} style={styles.logo} />
              </View>
            ))}
       
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 12,
    color: "#222",
  },
  slide: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  logoContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: (slideWidth - 32) / logosPerSlide,
    elevation: 3,
  },
  logo: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
  },
});
