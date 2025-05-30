import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Alert, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import Input from "./components/Input";
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

  const handleSubmit = () => {
    if (!formData.fullName.trim()) {
      return Alert.alert("Hata", "Lütfen ad soyad giriniz.");
    }
    if (!file) {
      return Alert.alert("Hata", "Lütfen fatura dosyanızı ekleyiniz.");
    }

    Alert.alert("Başarılı", "Sıfırlama talebiniz alındı.");
    console.log(formData, file);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Header
        title="Wiky Watch Sıfırlama Formu"
        subtitle="Lütfen PDF, JPG ve PNG formatında faturalarınızı ekleyiniz."
      />

      <View style={styles.formWrapper}>
        <Input
          label="Ad Soyad"
          value={formData.fullName}
          onChangeText={(val) => setFormData({ ...formData, fullName: val })}
        />

        <Input
          label="GSM No"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(val) => setFormData({ ...formData, phone: val })}
        />

        <Input
          label="E-Posta"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(val) => setFormData({ ...formData, email: val })}
        />

        <Input
          label="IMEI Numarası"
          value={formData.imei}
          onChangeText={(val) => setFormData({ ...formData, imei: val })}
        />

        <Text style={styles.label}>Sıfırlama Nedeni</Text>
        <TextInput
          style={styles.textarea}
          multiline
          numberOfLines={4}
          placeholder="Sıfırlama nedeninizi detaylıca belirtiniz"
          value={formData.reason}
          onChangeText={(val) => setFormData({ ...formData, reason: val })}
          placeholderTextColor="#999"
        />

        <FileInput label="Fatura Dosyası" file={file} onFileChange={setFile} />

        <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
