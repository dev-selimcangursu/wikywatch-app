import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Alert,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServiceStatus,
  clearServiceStatus,
} from "../../redux/slices/serviceStatusSlice";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import ServiceNumberInput from "./components/ServiceNumberInput";
import NoteText from "../../components/NoteText";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";
import styles from "./style";

export default function ServiceStatusInquiry() {
  const [serviceNumber, setServiceNumber] = React.useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.serviceStatus);

  const handleSubmit = () => {
    if (!serviceNumber.trim()) {
      Alert.alert("Uyarı", "Lütfen servis numarasını giriniz.");
      return;
    }
    dispatch(fetchServiceStatus(serviceNumber));
  };

  const handleWhatsApp = () => {
    const phone = "905527157486";
    const message = "Merhaba, servis durumum hakkında bilgi almak istiyorum.";
    Linking.openURL(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  const handleCall = () => {
    const phone = "02163459360";
    const url = Platform.OS === "android" ? `tel:${phone}` : `telprompt:${phone}`;
    Linking.openURL(url);
  };

  useEffect(() => {
    return () => {
      dispatch(clearServiceStatus());
    };
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Header
        subtitle="Lütfen ürün bilgilerini eksiksiz doldurunuz"
        title="Servis Durum Sorgulama"
      />
      <View style={styles.formContainer}>
        <ServiceNumberInput value={serviceNumber} onChange={setServiceNumber} />
        <AppButton title="Sorgula" onPress={handleSubmit} />
        <NoteText>
          Servis Numarası cihaz teknik servise ulaştığında tarafınıza SMS olarak gönderilmektedir.
        </NoteText>

        {loading && <ActivityIndicator size="large" color="#007BFF" />}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {data && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔧 Servis Bilgileri</Text>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Ad Soyad:</Text>
              <Text style={styles.value}>{data.fullname}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>IMEI:</Text>
              <Text style={styles.value}>{data.imei}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Ürün:</Text>
              <Text style={styles.value}>{data.product}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.label}>Durum:</Text>
              <Text style={styles.value}>{data.status}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
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
