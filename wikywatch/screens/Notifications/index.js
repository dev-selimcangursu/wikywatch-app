import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import NotificationsList from "./components/NotificationsList";
import { fetchNotifications } from "../../redux/slices/notificationsSlice";

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state) => state.notifications
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Bildirimler</Text>

      {loading && <ActivityIndicator size="large" color="#007bff" />}

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      {!loading && !error && <NotificationsList notifications={items} />}
    </View>
  );
}
