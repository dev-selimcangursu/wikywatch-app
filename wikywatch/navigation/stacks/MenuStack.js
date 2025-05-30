import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "../../screens/Menu";
import ServiceForm from "../../screens/ServiceForm";
import ServiceStatusInquiry from "../../screens/ServiceStatusInquiry";
import ResetForm from "../../screens/ResetForm";

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
    </Stack.Navigator>
  );
}
