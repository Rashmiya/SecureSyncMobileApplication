/**
Bottom tab navigator for the main app
    - Combines: Chats Tab + Vault Tab + Admin Tab + Profile Tab
    - Used by: RootNavigator (when user IS authenticated)
 */

import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { MainTabParamList } from "./types";
import { RootState } from "../store";
import { ChatNavigator } from "./ChatNavigator";
import { VaultNavigator } from "./VaultNavigator";
import { AdminNavigator } from "./AdminNavigator";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator<MainTabParamList>();

// TODO:- Placeholder for Profile/Settings (single screen, not a navigator)
const ProfilePlaceholder = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Settings (G1)</Text>
  </View>
);

export const MainNavigator = () => {
  // Read user role from Redux to conditionally show Admin tab
  const userRole = useSelector((state: RootState) => state.auth.user?.role);
  const isAdminOrOwner = userRole === "Admin" || userRole === "Owner";

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: false, // Each stack navigator handles its own header
        tabBarActiveTintColor: colors.brand.primary,
        tabBarInactiveTintColor: colors.text.tertiary,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ChatNavigator}
        options={{
          tabBarLabel: "Chats",
        }}
      />
      <Tab.Screen
        name="Vault"
        component={VaultNavigator}
        options={{
          tabBarLabel: "Vault",
        }}
      />
      {isAdminOrOwner && (
        <Tab.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            tabBarLabel: "Admin",
          }}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={ProfilePlaceholder}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};
