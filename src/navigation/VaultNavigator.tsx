/**
Stack navigator for file vault screens.
    - Handles: VaultHome → UploadFlow (modal) → FileDetail → MediaViewer (modal)
    - Used by: MainNavigator (Vault tab)
 */

import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VaultStackParamList } from "./types";

const Stack = createNativeStackNavigator<VaultStackParamList>();

const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Placeholder: {name}</Text>
  </View>
);

export const VaultNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="VaultHome"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="VaultHome"
        component={() => <PlaceholderScreen name="VaultHome" />}
        options={{ title: "Vault" }}
      />
      <Stack.Screen
        name="UploadFlow"
        component={() => <PlaceholderScreen name="UploadFlow" />}
        options={{
          presentation: "modal",
          title: "Upload File",
        }}
      />
      <Stack.Screen
        name="FileDetail"
        component={() => <PlaceholderScreen name="FileDetail" />}
        options={{ title: "File Details" }}
      />
      <Stack.Screen
        name="MediaViewer"
        component={() => <PlaceholderScreen name="MediaViewer" />}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
