/**
 * SecureSync — Splash Screen (A1)
 *
 * Initial screen shown when app launches.
 * Will display SecureSync logo and trigger biometric check.
 *
 * Status: Placeholder (will be implemented in Phase 4 — Auth Feature)
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { typography } from "../../../theme/typography";
import { spacing } from "../../../theme/spacing";

export const ChatThreadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Thread Screen</Text>
      //TODO:-
      <Text style={styles.subtitle}>Will be implemented in Phase 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.page,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.secondary,
  },
});
