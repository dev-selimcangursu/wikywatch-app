import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Input from "../../../components/Input";
import Label from "../../../components/Label";

export default function OrderNumberInput({ value, onChange }) {
  return (
    <View style={styles.wrapper}>
      <Label>Sipariş Numarası</Label>
      <Input
        placeholder="Sipariş numaranızı giriniz"
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
});
