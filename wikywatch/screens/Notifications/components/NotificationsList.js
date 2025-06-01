import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import { markNotificationAsRead } from "../../../redux/slices/notificationsSlice";
import Icon from "react-native-vector-icons/MaterialIcons";

const NotificationsList = ({ notifications }) => {
  const dispatch = useDispatch();
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    setNotificationList(notifications);
  }, [notifications]);

  const handleMarkAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
    setNotificationList((prev) => prev.filter((item) => item._id !== id));
    ToastAndroid.show("Bildirim kapatıldı", ToastAndroid.SHORT);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>
          {new Date(item.createdAt).toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleMarkAsRead(item._id)}>
        <Icon name="close" size={22} color="#888" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={notificationList}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      renderHiddenItem={() => null}
      rightOpenValue={0}
      disableRightSwipe={true}
      disableLeftSwipe={true}
      contentContainerStyle={{ paddingBottom: 20 }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 0,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
});

export default NotificationsList;
