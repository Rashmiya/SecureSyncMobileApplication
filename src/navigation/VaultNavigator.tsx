/**
Stack navigator for file vault screens.
    - Handles: VaultHome → UploadFlow (modal) → FileDetail → MediaViewer (modal)
    - Used by: MainNavigator (Vault tab)
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VaultStackParamList } from "./types";
import { FileDetailScreen } from "../features/vault/screens/FileDetailScreen";
import { MediaViewerScreen } from "../features/vault/screens/MediaViewerScreen";
import { UploadFlowScreen } from "../features/vault/screens/UploadFlowScreen";
import { VaultHomeScreen } from "../features/vault/screens/VaultHomeScreen";

const Stack = createNativeStackNavigator<VaultStackParamList>();

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
        component={VaultHomeScreen}
        options={{ title: "Vault" }}
      />
      <Stack.Screen
        name="UploadFlow"
        component={UploadFlowScreen}
        options={{
          presentation: "modal",
          title: "Upload File",
        }}
      />
      <Stack.Screen
        name="FileDetail"
        component={FileDetailScreen}
        options={{ title: "File Details" }}
      />
      <Stack.Screen
        name="MediaViewer"
        component={MediaViewerScreen}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
