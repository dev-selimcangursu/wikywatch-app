import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../../components/Input";
import Label from "../../../components/Label";

export default function ServiceNumberInput({ value, onChange }) {
  return (
    <View style={styles.wrapper}>
      <Label>Servis Numarası</Label>
      <Input
        value={value}
        onChangeText={onChange}
        placeholder="Servis numaranızı giriniz"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
});
