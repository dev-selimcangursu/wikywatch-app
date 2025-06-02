import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import CheckBox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleItem,
  fetchBoxContent,
} from "../../../redux/slices/boxContentSlice";


export default function BoxContent({ selectedValues, onChange }) {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.boxContent);

  useEffect(() => {
    dispatch(fetchBoxContent());
  }, [dispatch]);

  const toggle = (itemId) => {
    if (selectedValues.includes(itemId)) {
      onChange(selectedValues.filter((i) => i !== itemId));
    } else {
      onChange([...selectedValues, itemId]);
    }
  };

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
                uri: `http://192.168.75.147:3000/box_content/${item.image}`,
              }}
              style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
            <CheckBox
              value={selectedValues.includes(item.id)}
              onValueChange={() => toggle(item.id)}
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
