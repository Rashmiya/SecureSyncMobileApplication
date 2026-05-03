/**
Redux Store Configuration
    - Configures the Redux store with:
    - Combined root reducer (5 slices)
    - Redux Persist (auth + settings only)
    - Redux DevTools (development only)
    - Default middleware (with serializable check exceptions for redux-persist)
 */

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./rootReducer";

// Persistence configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "settings"], // Only persist these slices
};

// Wrap root reducer with persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions (they contain non-serializable values)
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: __DEV__, // Enable Redux DevTools only in development
});

// Create persistor (handles save/load to AsyncStorage)
export const persistor = persistStore(store);

// Export TypeScript types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
