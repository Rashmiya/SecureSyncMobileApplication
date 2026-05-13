import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { typography } from "../../../theme/typography";
import { spacing } from "../../../theme/spacing";
import { PrimaryButton } from "../../../components/buttons/PrimaryButton";

export const FirstTimeSetupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Time Setup Screen</Text>
      <Text style={styles.subtitle}>Will be implemented in Phase 4</Text>

      {/* ──TODO:- PrimaryButton Test (FE-20)*/}

      {/* State 1 — Default */}
      <PrimaryButton
        title="Continue"
        onPress={() => console.log("tapped")}
        style={{ marginTop: spacing.xl }}
      />

      {/* State 2 — Disabled */}
      <PrimaryButton
        title="Continue (Disabled)"
        onPress={() => console.log("tapped disable button")}
        disabled
        style={{ marginTop: spacing.sm }}
      />

      {/* State 3 — Loading */}
      <PrimaryButton
        title="Continue (Loading)"
        onPress={() => console.log("tapped loading button")}
        loading
        style={{ marginTop: spacing.sm }}
      />
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
