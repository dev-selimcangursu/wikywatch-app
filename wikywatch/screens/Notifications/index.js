import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./style";
import { notifications } from "./data";
import NotificationsList from "./components/NotificationsList";

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Bildirimler</Text>
      <NotificationsList notifications={notifications} />
    </View>
  );
}