import React, { useState, useEffect } from "react";
import { ScrollView, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { submitResetForm, resetStatus } from "../../redux/slices/resetFormSlice";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Textarea from "../../components/Textarea";
import AppButton from "../../components/AppButton";
import FileInput from "./components/FileInput";
import styles from "./style";

export default function ResetForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    imei: "",
    reason: "",
  });
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.resetForm);

  const handleSubmit = () => {
    if (!formData.fullName.trim()) {
      return Alert.alert("Hata", "Lütfen ad soyad giriniz.");
    }
    if (!file) {
      return Alert.alert("Hata", "Lütfen fatura dosyanızı ekleyiniz.");
    }

    dispatch(submitResetForm({ formData, file }));
  };

  useEffect(() => {
    if (success) {
      Alert.alert("Başarılı", "Sıfırlama talebiniz alındı.");
      dispatch(resetStatus());
      // İstersen formu sıfırlayabilirsin burada
      setFormData({ fullName: "", phone: "", email: "", imei: "", reason: "" });
      setFile(null);
    } else if (error) {
      Alert.alert("Hata", error.message || "Bir hata oluştu.");
      dispatch(resetStatus());
    }
  }, [success, error]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Header
        title="Wiky Watch Sıfırlama Formu"
        subtitle="Lütfen PDF, JPG ve PNG formatında faturalarınızı ekleyiniz."
      />

      <View style={styles.formWrapper}>
        <Label>Ad ve Soyad</Label>
        <Input
          placeholder={"Ad soyadınızı giriniz."}
          value={formData.fullName}
          onChangeText={(val) => setFormData({ ...formData, fullName: val })}
        />

        <Label>İletişim Numarası</Label>
        <Input
          placeholder={"İletişim numaranızı giriniz."}
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(val) => setFormData({ ...formData, phone: val })}
        />

        <Label>E-Posta Adresi</Label>
        <Input
          placeholder={"E-Posta adresinizi giriniz."}
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(val) => setFormData({ ...formData, email: val })}
        />

        <Label>İmei Numarası</Label>
        <Input
          placeholder={"İmei numarasını giriniz."}
          value={formData.imei}
          onChangeText={(val) => setFormData({ ...formData, imei: val })}
        />

        <Label>Sıfırlama Nedeni</Label>
        <Textarea
          placeholder="Sıfırlama nedeninizi detaylıca belirtiniz"
          value={formData.reason}
          onChangeText={(val) => setFormData({ ...formData, reason: val })}
        />

        <FileInput label="Fatura Dosyası" file={file} onFileChange={setFile} />

        <AppButton
          title={loading ? "Gönderiliyor..." : "Gönder"}
          onPress={handleSubmit}
          disabled={loading}
        />
      </View>
    </ScrollView>
  );
}
