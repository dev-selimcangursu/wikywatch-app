// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuScreen from "./screens/Menu";
import TabNavigator from "./navigation/TabNavigator";
import ServiceForm from "./screens/ServiceForm";
import ServiceStatusInquiry from "./screens/ServiceStatusInquiry";
import ResetForm from "./screens/ResetForm";
import DevicePaymentInquiry from "./screens/DevicePaymentInquiry";
import FaqScreen from "./screens/FaqScreen";
import OrderTracking from "./screens/OrderTracking";
import SalesPoints from "./screens/SalesPoints";
import BlogList from "./screens/BlogList";
import BlogDetail from "./screens/BlogDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ServiceForm" component={ServiceForm} />
          <Stack.Screen
            name="ServiceStatusInquiry"
            component={ServiceStatusInquiry}
          />
          <Stack.Screen name="ResetForm" component={ResetForm} />
          <Stack.Screen
            name="DevicePaymentInquiry"
            component={DevicePaymentInquiry}
          />
          <Stack.Screen
            name="FaqScreen"
            component={FaqScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderTracking"
            component={OrderTracking}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SalesPoints"
            component={SalesPoints}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BlogList"
            component={BlogList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BlogDetail"
            component={BlogDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
