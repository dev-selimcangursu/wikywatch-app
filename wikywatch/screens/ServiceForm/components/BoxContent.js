// components/BoxContent/index.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import CheckBox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleItem,
  fetchBoxContent,
} from "../../../redux/slices/boxContentSlice";

export default function BoxContent() {
  const dispatch = useDispatch();
  const { items, selected, status } = useSelector((state) => state.boxContent);

  useEffect(() => {
    dispatch(fetchBoxContent());
  }, [dispatch]);

  if (status === "loading") {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {items.map((item, idx) => (
          <View key={idx} style={styles.item}>
            <Image
              source={{
                uri: `http://192.168.36.147:3000/box_content/${item.image}`,
              }}
              style={styles.image}
            />

            <Text style={styles.text}>{item.name}</Text>
            <CheckBox
              value={selected.includes(item)}
              onValueChange={() => dispatch(toggleItem(item))}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  item: {
    width: 100,
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 4,
  },
  text: {
    fontSize: 13,
    marginBottom: 4,
    textAlign: "center",
  },
});
