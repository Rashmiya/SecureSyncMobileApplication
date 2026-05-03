// Combines all feature slices into one root reducer.

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slices/authSlice";
import chatReducer from "../features/chat/slices/chatSlice";
import vaultReducer from "../features/vault/slices/vaultSlice";
import adminReducer from "../features/admin/slices/adminSlice";
import settingsReducer from "../features/settings/slices/settingsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  vault: vaultReducer,
  admin: adminReducer,
  settings: settingsReducer,
});

export default rootReducer;
