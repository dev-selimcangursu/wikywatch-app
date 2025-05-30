import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuItem({ title, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={22} color="#333" />
      </View>
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={18} color="#999" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#eef1f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
});
