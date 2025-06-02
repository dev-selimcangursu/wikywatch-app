import React, { useState } from "react";
import {
  View,
  ScrollView,
  Alert,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrderStatus,
  clearOrder,
} from "../../redux/slices/orderStatusSlice";
import OrderNumberInput from "./components/OrderNumberInput";
import NoteText from "../../components/NoteText";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import styles from "./style";

export default function ServiceStatusInquiry() {
  const [serviceNumber, setServiceNumber] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.order);

  const handleSubmit = () => {
    if (!serviceNumber.trim()) {
      Alert.alert("Uyarı", "Lütfen sipariş numarasını giriniz.");
      return;
    }

    dispatch(clearOrder());
    dispatch(fetchOrderStatus(serviceNumber));
  };

  const handleWhatsApp = () => {
    const phone = "905494671741";
    const message = "Merhaba, siparişim hakkında bilgi almak istiyorum.";
    Linking.openURL(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  const handleCall = () => {
    const phone = "02163489393";
    const url = Platform.OS === "android" ? `tel:${phone}` : `telprompt:${phone}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {data && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔧 Sipariş Bilgileri</Text>

            <View style={styles.cardRow}>
              <Text style={styles.label}>Ad Soyad:</Text>
              <Text style={styles.value}>{data.name} {data.surname}</Text>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.label}>Telefon Numarası:</Text>
              <Text style={styles.value}>{data.phone}</Text>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.label}>Adres Bilgisi:</Text>
              <Text style={styles.value}>{data.address}</Text>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.label}>Fatura Tipi:</Text>
              <Text style={styles.value}>{data.invoice_type}</Text>
            </View>

            <View style={styles.cardRow}>
              <Text style={styles.label}>Sipariş Durumu:</Text>
              <Text style={styles.value}>{data.status}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.whatsappButton}
                onPress={handleWhatsApp}
              >
                <FontAwesome name="whatsapp" size={20} color="#fff" />
                <Text style={styles.buttonText}>WhatsApp'tan Ulaş</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.callButton} onPress={handleCall}>
                <MaterialIcons name="call" size={20} color="#fff" />
                <Text style={styles.buttonText}>Teknik Servisi Ara</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
