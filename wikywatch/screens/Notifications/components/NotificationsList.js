import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const NotificationsList = ({ notifications }) => {
  const renderItem = ({ item }) => (
    <View style={[styles.card, !item.read && styles.unreadCard]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#000",
  },
  message: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationsList;