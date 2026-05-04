/**
This provides autocomplete and type safety when navigating between screens.
Pattern: Each navigator has a ParamList type that maps screen names to their params.
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";

// ============================================================================
// AUTH NAVIGATOR (Stack)
// Handles login flow: Splash → Biometric → Setup → CompanyCode → Lockout
// ============================================================================
export type AuthStackParamList = {
  Splash: undefined;
  BiometricPrompt: undefined;
  FirstTimeSetup: undefined;
  BiometricSetup: undefined;
  ProfileSetup: undefined;
  CompanyCode: undefined;
  Lockout: { reason: "too-many-attempts" | "admin-action" };
};

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

// ============================================================================
// CHAT NAVIGATOR (Stack)
// Handles: ConversationList → Search → ChatThread → FileAttach → GroupInfo
// ============================================================================
export type ChatStackParamList = {
  ConversationList: undefined;
  Search: { initialFilter?: "all" | "files" };
  ChatThread: { threadId: string; threadName: string };
  FileAttach: { threadId: string }; // Modal
  GroupInfo: { groupId: string };
};

export type ChatScreenProps<T extends keyof ChatStackParamList> =
  NativeStackScreenProps<ChatStackParamList, T>;

// ============================================================================
// VAULT NAVIGATOR (Stack)
// Handles: VaultHome → UploadFlow → FileDetail → MediaViewer
// ============================================================================
export type VaultStackParamList = {
  VaultHome: undefined;
  UploadFlow: undefined; // Modal
  FileDetail: { fileId: string };
  MediaViewer: { fileId: string; fileUri: string }; // Modal
};

export type VaultScreenProps<T extends keyof VaultStackParamList> =
  NativeStackScreenProps<VaultStackParamList, T>;

// ============================================================================
// ADMIN NAVIGATOR (Stack)
// Handles: AdminOverview → UserManagement → GroupManagement → AuditLog
// ============================================================================
export type AdminStackParamList = {
  AdminOverview: undefined;
  UserManagement: undefined;
  GroupManagement: undefined;
  AuditLog: undefined;
};

export type AdminScreenProps<T extends keyof AdminStackParamList> =
  NativeStackScreenProps<AdminStackParamList, T>;

// ============================================================================
// MAIN NAVIGATOR (Bottom Tabs)
// Combines: Chats Tab + Vault Tab + Admin Tab + Profile Tab
// ============================================================================
export type MainTabParamList = {
  Chats: undefined;
  Vault: undefined;
  Admin: undefined; // Conditional
  Profile: undefined; // Settings screen
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

// ============================================================================
// ROOT NAVIGATOR (Stack)
// Top-level: Switches between Auth flow and Main app based on auth state
// ============================================================================
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// ============================================================================
// GLOBAL DECLARATION
// Makes navigation types available globally for useNavigation hook
// ============================================================================
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
