import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  text: string;
  timestamp: number;
  status: "sending" | "sent" | "delivered" | "read" | "failed";
}

export interface Thread {
  id: string;
  name: string;
  lastMessage: string;
  unreadCount: number;
  updatedAt: number;
}

export interface ChatState {
  threads: Thread[];
  activeThreadId: string | null;
  messages: Record<string, Message[]>;
  typingUsers: Record<string, string[]>;
  totalUnread: number;
}

const initialState: ChatState = {
  threads: [],
  activeThreadId: null,
  messages: {},
  typingUsers: {},
  totalUnread: 0,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
});

// Export the reducer (used in rootReducer)
export default chatSlice.reducer;

// Export actions
export const chatActions = chatSlice.actions;
