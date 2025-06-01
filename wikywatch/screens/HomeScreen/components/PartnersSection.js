import React, { useEffect } from "react";
import { View, Text, Image, Dimensions, StyleSheet, ActivityIndicator } from "react-native";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesPoints } from "../../../redux/slices/salesPointsSlice";

// Ekran genişliğini al
const { width } = Dimensions.get("window");
// Her slaytta gösterilecek logo sayısı
const logosPerSlide = 3;
// Slayt genişliği: ekran genişliği - padding
const slideWidth = width - 32;

export default function PartnersSection() {
  const dispatch = useDispatch();

  // Redux store'dan satış noktalarını ve durum bilgisini al
  const { data: salesPoints, status } = useSelector((state) => state.salesPoints);

  // Bileşen yüklendiğinde sadece bir kez veri çekmek için useEffect kullan
  useEffect(() => {
    if (status === "idle") dispatch(fetchSalesPoints()); // Eğer durum 'idle' ise verileri API'den çek
  }, [dispatch, status]);

  // Eğer veriler yükleniyorsa, ekrana loading göstergesi bas
  if (status === "loading") {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  // Partnerleri 3'erli gruplara böl
  const groupedPartners = [];
  for (let i = 0; i < salesPoints.length; i += logosPerSlide) {
    groupedPartners.push(salesPoints.slice(i, i + logosPerSlide));
  }

  return (
    <View style={{ marginBottom: 20, height: 100 }}>
      <Text style={styles.title}>Satış Noktalarımız</Text>
      <Swiper autoplay autoplayTimeout={3} loop showsPagination={false}>
        {groupedPartners.map((group, index) => (
          <View key={index} style={styles.slide}>
            {group.map((partner) => (
              <View key={partner._id} style={styles.logoContainer}>
                <Image
                  source={{ uri: `http://192.168.1.23:3000/partners/${partner.image}` }}
                  style={styles.logo}
                />
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
    height: 30,
    resizeMode: "contain", 
  },
});
