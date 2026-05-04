/**
Stack navigator for admin dashboard screens.
    - Handles: AdminOverview → UserManagement → GroupManagement → AuditLog
    - Used by: MainNavigator (only visible if role is Admin/Owner)
 */

import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminStackParamList } from "./types";

const Stack = createNativeStackNavigator<AdminStackParamList>();

// TODO:- Placeholder screens
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Placeholder: {name}</Text>
  </View>
);

export const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminOverview"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="AdminOverview"
        component={() => <PlaceholderScreen name="AdminOverview" />}
        options={{ title: "Admin Dashboard" }}
      />
      <Stack.Screen
        name="UserManagement"
        component={() => <PlaceholderScreen name="UserManagement" />}
        options={{ title: "Users" }}
      />
      <Stack.Screen
        name="GroupManagement"
        component={() => <PlaceholderScreen name="GroupManagement" />}
        options={{ title: "Groups" }}
      />
      <Stack.Screen
        name="AuditLog"
        component={() => <PlaceholderScreen name="AuditLog" />}
        options={{ title: "Audit Log" }}
      />
    </Stack.Navigator>
  );
};
