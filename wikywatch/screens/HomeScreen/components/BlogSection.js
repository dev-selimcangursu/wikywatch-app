import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const blogsData = [
  {
    id: "1",
    title: "Akıllı Saat Seçim Rehberi",
    excerpt: "Çocuğunuz için en uygun akıllı saati nasıl seçersiniz?",
    image: require("../../../assets/images/blogs/blog-1.jpg"),
  },
  {
    id: "2",
    title: "Çocuk Güvenliği İçin 5 Uygulama",
    excerpt: "Ebeveynlerin çocuk güvenliği için kullanabileceği uygulamalar.",
    image: require("../../../assets/images/blogs/blog-2.jpg"),
  },
  {
    id: "3",
    title: "Teknoloji ile Güvende Kalın",
    excerpt: "Giyilebilir teknolojilerle güvenliği artırmanın yollarını bizimle keşfet.",
    image: require("../../../assets/images/blogs/blog-3.jpg"),
  },
];

const { width } = Dimensions.get("window");
const cardWidth = width - 32;
const cardHeight = (cardWidth * 9) / 16; 

export default function BlogSection() {
  return (
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      <Text style={styles.sectionTitle}>Blog Yazılarımız</Text>
      <Swiper
        autoplay
        autoplayTimeout={5}
        loop
        showsPagination
        style={{ height: cardHeight + 100 }} 
      >
        {blogsData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.excerpt}>{item.excerpt}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: "#222",
  },
  card: {
    width: cardWidth,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: cardHeight,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#111",
  },
  excerpt: {
    fontSize: 14,
    color: "#666",
  },
});
