import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";

import Logo from "./components/Logo";
import ServiceNumberInput from "./components/ServiceNumberInput";
import NoteText from "./components/NoteText";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";

import styles from "./style";

export default function ServiceStatusInquiry() {
  const [serviceNumber, setServiceNumber] = useState("");

  const handleSubmit = () => {
    if (!serviceNumber.trim()) {
      Alert.alert("Uyarı", "Lütfen servis numarasını giriniz.");
      return;
    }
    Alert.alert("Bilgi", `Servis Numarası: ${serviceNumber} sorgulanıyor...`);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Header
        subtitle="Servis Numarasını Eksiksiz Giriniz..."
        title="Ödeme Yapılacak Cihaz Sorgulama"
      />

      <View style={styles.formContainer}>
        <ServiceNumberInput value={serviceNumber} onChange={setServiceNumber} />
        <AppButton title="Sorgula" onPress={handleSubmit} />
        <NoteText>
          Servis Numarası cihaz teknik servise ulaştığında tarafınıza SMS olarak
          gönderilmektedir.
        </NoteText>
      </View>
    </ScrollView>
  );
}
