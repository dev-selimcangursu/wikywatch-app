import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const sliderData = [
  {
    id: "1",
    img: require("../../../assets/images/icons/sales-call-center.png"),
  },
  {
    id: "2",
    img: require("../../../assets/images/icons/sales-call-center.png"),
  },
  {
    id: "3",
    img: require("../../../assets/images/icons/sales-call-center.png"),
  },
];

const { width } = Dimensions.get("window");

export default function SliderSection() {
  return (
    <View style={{ marginBottom: 20, height: 180 }}>
      <Swiper
        autoplay
        autoplayTimeout={5}
        showsPagination
        loop
        style={styles.swiper}
      >
        {sliderData.map((item) => (
          <Image key={item.id} source={item.img} style={styles.image} />
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  swiper: {
    borderRadius: 10,
  },
  image: {
    width: width - 32,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 16,
    resizeMode: "cover",
  },
});
