import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
const height = (width * 9) / 16; // 16:9 oranı

const youtubeVideos = [
  "https://www.youtube.com/embed/Ivc8JpdIuis",
  "https://www.youtube.com/embed/mBTKXf5Bb7E",
  "https://www.youtube.com/embed/DZFn7cdVOYk",
  "https://www.youtube.com/embed/dbWqsMNs__I",
  "https://www.youtube.com/embed/0gcJCbAJAYcqIYzv",
  "https://www.youtube.com/embed/NTJCuUNAqgk",
  "https://www.youtube.com/embed/LIRlgIa1N5Y",
  "https://www.youtube.com/embed/58CAu4mC7_c",
  "https://www.youtube.com/embed/PWTwhqxuM4U",
  "https://www.youtube.com/embed/tTLkR2GzSQ8",
];

export default function VideoSection() {
  return (
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      <Text style={styles.sectionTitle}>Tanıtım Videolarımız</Text>
      <Swiper
        autoplay
        autoplayTimeout={5}
        loop
        showsPagination
        style={{ height }}
      >
        {youtubeVideos.map((videoUrl, index) => (
          <View key={index} style={styles.slide}>
            <WebView
              source={{ uri: videoUrl }}
              style={styles.video}
              allowsFullscreenVideo
              javaScriptEnabled
              domStorageEnabled
            />
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
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: width - 32,
    height: (width * 9) / 16,
    borderRadius: 12,
    overflow: "hidden",
  },
});
