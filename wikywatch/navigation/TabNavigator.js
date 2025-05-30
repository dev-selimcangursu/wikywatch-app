import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import Notifications from "../screens/Notifications";
import ChatScreen from "../screens/Chat";

import MenuStack from "./stacks/MenuStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#f7f9fc",
          height: 100,
          paddingBottom: 10,
        },
        tabBarSafeAreaInsets: { bottom: 20 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Anasayfa") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Bildirimler") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Sohbet") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Menü") {
            iconName = focused ? "menu" : "menu-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Anasayfa" component={HomeScreen} />
      <Tab.Screen name="Bildirimler" component={Notifications} />
      <Tab.Screen name="Sohbet" component={ChatScreen} />
      <Tab.Screen name="Menü" component={MenuStack} />
    </Tab.Navigator>
  );
}
