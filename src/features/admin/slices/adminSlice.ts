import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRole } from "../../auth/slices/authSlice";

// Define types
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  lastActive: number;
}

export interface AuditLogEntry {
  id: string;
  userId: string;
  userName: string;
  action: string;
  resource: string;
  timestamp: number;
}

export interface AdminState {
  users: AdminUser[];
  auditLog: AuditLogEntry[];
  totalUsers: number;
  activeUsers: number;
  isLoading: boolean;
}

const initialState: AdminState = {
  users: [],
  auditLog: [],
  totalUsers: 0,
  activeUsers: 0,
  isLoading: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
});

// Export the reducer (used in rootReducer)
export default adminSlice.reducer;

// Export actions
export const adminActions = adminSlice.actions;
