import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colors } from "../../../theme/colors";
import { typography } from "../../../theme/typography";
import { spacing } from "../../../theme/spacing";
import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
} from "../../../components/buttons";
import { TextInput } from "../../../components/inputs";

export const FirstTimeSetupScreen = () => {
  //TODO:- Implement the actual logic and state management
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("testing Name");
  const [value3, setValue3] = useState("invalid@");
  const [value4, setValue4] = useState("SS-CORP");

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoid}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
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
        {/* State 4 — Secondary , Default */}
        <SecondaryButton
          title="Cancel"
          onPress={() => console.log("secondary tapped")}
          style={{ marginTop: spacing.sm }}
        />
        {/* State 5 — Secondary , Disabled */}
        <SecondaryButton
          title="Cancel (Disabled)"
          onPress={() => {}}
          disabled
          style={{ marginTop: spacing.sm }}
        />
        {/* State 6 — Danger , Default */}
        <DangerButton
          title="Revoke Access"
          onPress={() => console.log("danger tapped")}
          style={{ marginTop: spacing.sm }}
        />
        {/* State 7 — Danger , Disabled */}
        <DangerButton
          title="Revoke Access (Disabled)"
          onPress={() => {}}
          disabled
          style={{ marginTop: spacing.sm }}
        />
        {/* ── TODO:- TextInput Tests (FE-22)*/}
        {/* State 1 — Default */}
        <TextInput
          label="Employee ID or Email"
          value={value1}
          onChangeText={setValue1}
          placeholder="e.g. RR-001 or john@bsneom.com"
          style={{ marginTop: spacing.xl }}
        />
        {/* State 2 — Focused */}
        <TextInput
          label="Display Name"
          value={value2}
          onChangeText={setValue2}
          placeholder="Enter your name"
          style={{ marginTop: spacing.xl }}
        />
        {/* State 3 — Error */}
        <TextInput
          label="Email Address"
          value={value3}
          onChangeText={setValue3}
          placeholder="Enter your email"
          errorMessage="Please enter a valid value"
          style={{ marginTop: spacing.xl }}
        />
        {/* State 4 — Disabled */}
        <TextInput
          label="Company Code"
          value={value4}
          onChangeText={setValue4}
          placeholder="Enter company code"
          disabled
          style={{ marginTop: spacing.xl }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.background.page,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
    paddingTop: spacing["3xl"],
    paddingBottom: spacing["3xl"],
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
  scroll: {
    flex: 1,
    backgroundColor: colors.background.page,
  },
});
