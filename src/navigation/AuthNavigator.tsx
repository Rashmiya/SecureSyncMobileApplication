/**
Stack navigator for the authentication flow.
    - Handles: Splash → Biometric → Onboarding → Login → Lockout
    - Used by: RootNavigator (when user is NOT authenticated)
 */

import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";

// Create the stack navigator with our type definitions
const Stack = createNativeStackNavigator<AuthStackParamList>();

// TODO:- Placeholder screens
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Placeholder: {name}</Text>
  </View>
);

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false, // don't show navigation header
        gestureEnabled: false, // Prevent swipe-back during auth
      }}
    >
      <Stack.Screen
        name="Splash"
        component={() => <PlaceholderScreen name="Splash" />}
      />
      <Stack.Screen
        name="BiometricPrompt"
        component={() => <PlaceholderScreen name="BiometricPrompt" />}
      />
      <Stack.Screen
        name="FirstTimeSetup"
        component={() => <PlaceholderScreen name="FirstTimeSetup" />}
      />
      <Stack.Screen
        name="BiometricSetup"
        component={() => <PlaceholderScreen name="BiometricSetup" />}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={() => <PlaceholderScreen name="ProfileSetup" />}
      />
      <Stack.Screen
        name="CompanyCode"
        component={() => <PlaceholderScreen name="CompanyCode" />}
      />
      <Stack.Screen
        name="Lockout"
        component={() => <PlaceholderScreen name="Lockout" />}
      />
    </Stack.Navigator>
  );
};
