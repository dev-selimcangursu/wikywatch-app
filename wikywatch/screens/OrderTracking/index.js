import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import OrderNumberInput from "./components/OrderNumberInput";
import NoteText from "../../components/NoteText";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";

import styles from "./style";

export default function ServiceStatusInquiry() {
  const [serviceNumber, setServiceNumber] = useState("");

  const handleSubmit = () => {
    if (!serviceNumber.trim()) {
      Alert.alert("Uyarı", "Lütfen sipariş numarasını giriniz.");
      return;
    }
    Alert.alert("Bilgi", `Sipariş Numarası: ${serviceNumber} sorgulanıyor...`);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Header
        subtitle="Lütfen Sipariş Numaranızı Eksiksiz Giriniz.."
        title="Sipariş Sorgulama"
      />

      <View style={styles.formContainer}>
        <OrderNumberInput value={serviceNumber} onChange={setServiceNumber} />
        <AppButton title="Sorgula" onPress={handleSubmit} />
        <NoteText>
          Sipariş Numarası ürünü satın aldığınızda tarafınıza SMS olarak
          gönderilmektedir.
        </NoteText>
      </View>
    </ScrollView>
  );
}
