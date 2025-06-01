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
import { fetchFaultCategories } from "../../redux/slices/faultCategorySlice";

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

export default function ServiceForm() {
  const dispatch = useDispatch();

  const {
    items: products,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.products);

  const {
    items: faultCategories,
    loading: faultCategoriesLoading,
    error: faultCategoriesError,
  } = useSelector((state) => state.faultCategories);

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
    dispatch(fetchFaultCategories());
  }, [dispatch]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    Alert.alert("Başarılı", "Form gönderildi.");
    console.log("Gönderilen Form Verisi:", formData);
  };

  const productOptions = products
    .filter((p) => p.is_active)
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
        {productsLoading ? (
          <Text>Ürünler yükleniyor...</Text>
        ) : productsError ? (
          <Text style={{ color: "red" }}>Hata: {productsError}</Text>
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
        {faultCategoriesLoading ? (
          <Text>Arıza kategorileri yükleniyor...</Text>
        ) : faultCategoriesError ? (
          <Text style={{ color: "red" }}>Hata: {faultCategoriesError}</Text>
        ) : (
          <CheckBoxGroup
            options={faultCategories}
            selectedValues={formData.faultCategories}
            onChange={(selected) => handleChange("faultCategories", selected)}
          />
        )}

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
