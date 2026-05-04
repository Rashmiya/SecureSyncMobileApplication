/**
Stack navigator for the chat related screens.
    - Handles: Handles: ConversationList → Search → ChatThread → FileAttach → GroupInfo
    - Used by: MainNavigator (when user is authenticated)
 */

import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatStackParamList } from "./types";

const Stack = createNativeStackNavigator<ChatStackParamList>();

// TODO:- Placeholder screens
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Placeholder: {name}</Text>
  </View>
);

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
        component={() => <PlaceholderScreen name="ConversationList" />}
        options={{ title: "Chats" }}
      />
      <Stack.Screen
        name="Search"
        component={() => <PlaceholderScreen name="Search" />}
        options={{ title: "Search" }}
      />
      <Stack.Screen
        name="ChatThread"
        component={() => <PlaceholderScreen name="ChatThread" />}
        options={{ title: "Chat" }}
      />
      <Stack.Screen
        name="FileAttach"
        component={() => <PlaceholderScreen name="FileAttach" />}
        options={{
          presentation: "modal",
          headerShown: true,
          title: "Attach File",
        }}
      />
      <Stack.Screen
        name="GroupInfo"
        component={() => <PlaceholderScreen name="GroupInfo" />}
        options={{ title: "Group Info" }}
      />
    </Stack.Navigator>
  );
};
