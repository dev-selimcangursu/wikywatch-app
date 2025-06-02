import React, { useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchSalesPoints } from "../../redux/slices/salesPointsSlice";

import styles from "./style";
import Header from "../../components/Header";
import SalesPointCard from "./components/SalesPointCard";

export default function SalesPoints() {
  const dispatch = useDispatch();

  const { data: salesPoints, status, error } = useSelector((state) => state.salesPoints);

  useEffect(() => {
    dispatch(fetchSalesPoints());
  }, [dispatch]);

  return (
    <ScrollView contentContainerStyle={{ ...styles.container, flexGrow: 1 }}>
      <Header
        title="Satış Noktalarımız"
        subtitle="Wiky Watch ürünlerini aşağıdaki anlaşmalı satış noktalarımızdan temin edebilirsiniz."
      />

      <View style={[styles.cardContainer, { paddingBottom: 40 }]}>
        {status === "loading" && <ActivityIndicator size="large" color="#000" />}
        {status === "failed" && <Text style={{ color: "red" }}>{error}</Text>}
        {status === "succeeded" && salesPoints.map((point, index) => (
          <SalesPointCard
            key={index}
            name={point.name}
            logo={{ uri: `http://192.168.1.114:3000/partners/${point.image}` }} 
          />
        ))}
      </View>
    </ScrollView>
  );
}
