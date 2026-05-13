import React from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";
import { spacing } from "../../theme/spacing";
import { radius } from "../../theme/radius";

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  testID?: string;
  style?: ViewStyle;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = true,
  testID,
  style,
}) => {
  const isInactive = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isInactive}
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: isInactive, busy: loading }}
      accessibilityLabel={title}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        disabled ? styles.disabled : styles.default,
        pressed && !isInactive && styles.pressed,
        style,
      ]}
    >
      <View style={styles.contentSlot}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={colors.brand.primary}
            testID={testID ? `${testID}-spinner` : undefined}
          />
        ) : (
          <Text
            style={[styles.label, disabled && styles.labelDisabled]}
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: spacing.touch,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  fullWidth: {
    width: "100%",
  },
  default: {
    backgroundColor: "transparent",
    borderColor: colors.brand.primary,
  },
  disabled: {
    backgroundColor: "transparent",
    borderColor: colors.border.default,
  },
  pressed: {
    opacity: 0.7,
  },
  contentSlot: {
    height: typography.button.lineHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: typography.button.fontFamily,
    fontSize: typography.button.fontSize,
    lineHeight: typography.button.lineHeight,
    color: colors.brand.primary,
  },
  labelDisabled: {
    color: colors.text.tertiary,
  },
});
