import React from "react";
import { View, StyleSheet } from "react-native";
import Label from "../../../components/Label";
import Input from "../../../components/Input";

export default function ServiceNumberInput({ value, onChange }) {
  return (
    <View style={styles.wrapper}>
      <Label>Servis Numarası</Label>
      <Input
        placeholder="Servis numaranızı giriniz"
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
