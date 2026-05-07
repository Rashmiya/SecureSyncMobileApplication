/**
Stack navigator for admin dashboard screens.
    - Handles: AdminOverview → UserManagement → GroupManagement → AuditLog
    - Used by: MainNavigator (only visible if role is Admin/Owner)
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminStackParamList } from "./types";
import { AdminOverviewScreen } from "../features/admin/screens/AdminOverviewScreen";
import { AuditLogScreen } from "../features/admin/screens/AuditLogScreen";
import { GroupManagementScreen } from "../features/admin/screens/GroupManagementScreen";
import { UserManagementScreen } from "../features/admin/screens/UserManagementScreen";

const Stack = createNativeStackNavigator<AdminStackParamList>();

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
        component={AdminOverviewScreen}
        options={{ title: "Admin Dashboard" }}
      />
      <Stack.Screen
        name="UserManagement"
        component={UserManagementScreen}
        options={{ title: "Users" }}
      />
      <Stack.Screen
        name="GroupManagement"
        component={GroupManagementScreen}
        options={{ title: "Groups" }}
      />
      <Stack.Screen
        name="AuditLog"
        component={AuditLogScreen}
        options={{ title: "Audit Log" }}
      />
    </Stack.Navigator>
  );
};
