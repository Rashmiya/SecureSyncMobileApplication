import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
export type UserRole = "Employee" | "Admin" | "Owner";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  workspaceId: string | null;
  isAuthenticated: boolean;
  failedAttempts: number;
  isLockedOut: boolean;
}

// Initial state (when app starts, no one is logged in)
const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  workspaceId: null,
  isAuthenticated: false,
  failedAttempts: 0,
  isLockedOut: false,
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// Export the reducer (used in rootReducer)
export default authSlice.reducer;

// Export actions (used in components later)
export const authActions = authSlice.actions;
