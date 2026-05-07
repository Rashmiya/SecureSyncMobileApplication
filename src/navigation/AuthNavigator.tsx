/**
Stack navigator for the authentication flow.
    - Handles: Splash → Biometric → Onboarding → Login → Lockout
    - Used by: RootNavigator (when user is NOT authenticated)
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import { SplashScreen } from "../features/auth/screens/SplashScreen";
import { BiometricPromptScreen } from "../features/auth/screens/BiometricPromptScreen";
import { FirstTimeSetupScreen } from "../features/auth/screens/FirstTimeSetupScreen";
import { BiometricSetupScreen } from "../features/auth/screens/BiometricSetupScreen";
import { ProfileSetupScreen } from "../features/auth/screens/ProfileSetupScreen";
import { CompanyCodeScreen } from "../features/auth/screens/CompanyCodeScreen";
import { LockoutScreen } from "../features/auth/screens/LockoutScreen";

// Create the stack navigator with our type definitions
const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false, // don't show navigation header
        gestureEnabled: false, // Prevent swipe-back during auth
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="BiometricPrompt" component={BiometricPromptScreen} />
      <Stack.Screen name="FirstTimeSetup" component={FirstTimeSetupScreen} />
      <Stack.Screen name="BiometricSetup" component={BiometricSetupScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="CompanyCode" component={CompanyCodeScreen} />
      <Stack.Screen name="Lockout" component={LockoutScreen} />
    </Stack.Navigator>
  );
};
