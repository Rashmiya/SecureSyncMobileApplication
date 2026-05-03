import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
export type Theme = "light" | "dark" | "system";
export type SessionTimeout = 5 | 15 | 30; // minutes

export interface SettingsState {
  theme: Theme;
  sessionTimeout: SessionTimeout;
  biometricEnabled: boolean;
  notificationsEnabled: boolean;
  soundEnabled: boolean;
}

const initialState: SettingsState = {
  theme: "system",
  sessionTimeout: 15,
  biometricEnabled: true,
  notificationsEnabled: true,
  soundEnabled: true,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

// export the reducer (used in rootReducer)
export default settingsSlice.reducer;

// Export actions
export const settingsActions = settingsSlice.actions;
