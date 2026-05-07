/**
Stack navigator for the chat related screens.
    - Handles: Handles: ConversationList → Search → ChatThread → FileAttach → GroupInfo
    - Used by: MainNavigator (when user is authenticated)
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatStackParamList } from "./types";
import { ChatThreadScreen } from "../features/chat/screens/ChatThreadScreen";
import { ConversationListScreen } from "../features/chat/screens/ConversationListScreen";
import { FileAttachScreen } from "../features/chat/screens/FileAttachScreen";
import { GroupInfoScreen } from "../features/chat/screens/GroupInfoScreen";
import { SearchScreen } from "../features/chat/screens/SearchScreen";

const Stack = createNativeStackNavigator<ChatStackParamList>();

export const ChatNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ConversationList"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="ConversationList"
        component={ConversationListScreen}
        options={{ title: "Chats" }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
      <Stack.Screen
        name="ChatThread"
        component={ChatThreadScreen}
        options={{ title: "Chat" }}
      />
      <Stack.Screen
        name="FileAttach"
        component={FileAttachScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          title: "Attach File",
        }}
      />
      <Stack.Screen
        name="GroupInfo"
        component={GroupInfoScreen}
        options={{ title: "Group Info" }}
      />
    </Stack.Navigator>
  );
};
