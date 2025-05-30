import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "../../screens/Menu";
import ServiceForm from "../../screens/ServiceForm";
import ServiceStatusInquiry from "../../screens/ServiceStatusInquiry";
import ResetForm from "../../screens/ResetForm";
import DevicePaymentInquiry from "../../screens/DevicePaymentInquiry";
import FaqScreen from "../../screens/FaqScreen";
import OrderTracking from "../../screens/OrderTracking";

const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceForm"
        component={ServiceForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceStatusInquiry"
        component={ServiceStatusInquiry}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="ResetForm"
        component={ResetForm}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="DevicePaymentInquiry"
        component={DevicePaymentInquiry}
        options={{ headerShown: false }}
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
    </Stack.Navigator>
    
  );
}
