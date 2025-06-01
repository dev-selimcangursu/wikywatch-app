import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";

import Input from "../../components/Input";
import Label from "../../components/Label";
import AppButton from "../../components/AppButton";
import NoteText from "../../components/NoteText";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import CheckBoxGroup from "./components/CheckBoxGroup";
import BoxContent from "./components/BoxContent";
import Header from "../../components/Header";
import { fetchProducts } from "../../redux/slices/productSlice";

const cityOptions = [
  { label: "İstanbul", value: "1" },
  { label: "Ankara", value: "2" },
  { label: "İzmir", value: "3" },
];

const districtOptions = [
  { label: "Kadıköy", value: "11" },
  { label: "Çankaya", value: "12" },
  { label: "Bornova", value: "13" },
];

const faultCategoryOptions = [
  { label: "Kırık Dokunmatik Ekran", value: "1" },
  { label: "Sıvı Teması", value: "2" },
  { label: "Ses Sorunu", value: "3" },
  { label: "Konum Sorunu", value: "4" },
  { label: "Kordon Kopması", value: "5" },
  { label: "Kurulum Problemi", value: "6" },
  { label: "Şarj Aleti Sorunu", value: "7" },
  { label: "Tuş Sorunu", value: "8" },
  { label: "Kamera Hatası", value: "9" },
  { label: "Koldan Taktı - Çıkardı Hatası", value: "10" },
  { label: "Kasa Kırığı", value: "11" },
  { label: "Şarj Az Gidiyor", value: "12" },
  { label: "Şarj Etmiyor", value: "13" },
];

export default function ServiceForm() {
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district: "",
    product: "",
    imei: "",
    faultCategories: [],
    faultDescription: "",
    boxContent: [],
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    Alert.alert("Başarılı", "Form gönderildi.");
    console.log("Gönderilen Form Verisi:", formData);
  };

  // Ürünlerden aktif olanları Select için map et
  const productOptions = products
    .filter((p) => p.is_active) // backend’e göre is_active veya status değişebilir
    .map((p) => ({ label: p.name, value: p.product_id }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        subtitle="Lütfen ürün bilgilerini eksiksiz doldurunuz"
        title="Wiky Teknik Servis Formu"
      />
      <View style={styles.formContainer}>
        <Label>Ad Soyad</Label>
        <Input
          placeholder="Ad Soyadınızı Giriniz"
          value={formData.fullName}
          onChangeText={(val) => handleChange("fullName", val)}
        />
        <Label>GSM Numarası</Label>
        <Input
          placeholder="Telefon numarası giriniz"
          value={formData.phone}
          onChangeText={(val) => handleChange("phone", val)}
          keyboardType="phone-pad"
        />
        <Label>E-Posta Adresi</Label>
        <Input
          placeholder="E-posta adresi giriniz"
          value={formData.email}
          onChangeText={(val) => handleChange("email", val)}
          keyboardType="email-address"
        />
        <Label>Adres Bilgisi</Label>
        <Textarea
          placeholder="Adres bilgilerinizi giriniz"
          value={formData.address}
          onChangeText={(val) => handleChange("address", val)}
        />
        <Label>Şehir</Label>
        <Select
          label="Şehir"
          selectedValue={formData.city}
          onValueChange={(val) => handleChange("city", val)}
          options={cityOptions}
        />
        <Label>İlçe</Label>
        <Select
          label="İlçe"
          selectedValue={formData.district}
          onValueChange={(val) => handleChange("district", val)}
          options={districtOptions}
        />
        <Label>Ürün</Label>
        {loading ? (
          <Text>Ürünler yükleniyor...</Text>
        ) : error ? (
          <Text style={{ color: "red" }}>Hata: {error}</Text>
        ) : (
          <Select
            label="Ürün"
            selectedValue={formData.product}
            onValueChange={(val) => handleChange("product", val)}
            options={productOptions}
          />
        )}
        <Label>İmei Numarası</Label>
        <Input
          placeholder="IMEI giriniz"
          value={formData.imei}
          onChangeText={(val) => handleChange("imei", val)}
        />
        <Label>Arıza Kategorisi</Label>
        <CheckBoxGroup
          options={faultCategoryOptions}
          selectedValues={formData.faultCategories}
          onChange={(selected) => handleChange("faultCategories", selected)}
        />
        <Label>Arıza Tanımı</Label>
        <Textarea
          placeholder="Arızayı detaylı şekilde açıklayınız"
          value={formData.faultDescription}
          onChangeText={(val) => handleChange("faultDescription", val)}
        />
        <Label>Kutu İçeriği</Label>
        <BoxContent
          selectedValues={formData.boxContent}
          onChange={(selected) => handleChange("boxContent", selected)}
        />
        <NoteText>
          Ürünü teknik servise gönderirken kutu içeriğini eksiksiz ekleyiniz.
          Gönderim sonrası tarafınıza bilgilendirme yapılacaktır.
        </NoteText>
        <AppButton title="Gönder" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}
