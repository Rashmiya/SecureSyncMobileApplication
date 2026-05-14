import React, { useState } from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";
import { colors, typography, spacing, radius } from "../../theme";

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  maxLength?: number;
  testID?: string;
  style?: ViewStyle;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  errorMessage,
  disabled = false,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  maxLength,
  testID,
  style,
}) => {
  // Tracks whether user is actively typing
  const [isFocused, setIsFocused] = useState(false);

  // Derive the current visual state (disabled wins over error)
  const getBorderColor = () => {
    if (disabled) return colors.border.default;
    if (errorMessage) return colors.semantic.danger;
    if (isFocused) return colors.brand.primary;
    return colors.border.default;
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, disabled && styles.labelDisabled]}>
        {label}
      </Text>

      {/* Input Field */}
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.tertiary}
        editable={!disabled}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        testID={testID}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          { borderColor: getBorderColor() },
          disabled && styles.inputDisabled,
        ]}
      />

      {/* Error Message */}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    ...typography.bodyMedium,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  labelDisabled: {
    color: colors.text.tertiary,
  },
  input: {
    height: spacing.touch,
    backgroundColor: colors.background.surface,
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    ...typography.body,
    color: colors.text.primary,
  },
  inputDisabled: {
    backgroundColor: colors.background.input,
    color: colors.text.tertiary,
  },
  errorMessage: {
    ...typography.bodySm,
    color: colors.semantic.danger,
    marginTop: spacing.xs,
  },
});
