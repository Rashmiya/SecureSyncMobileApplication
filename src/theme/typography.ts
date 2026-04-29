/**
SecureSync Design System — Typography Tokens

Usage:
    import { typography } from '@/theme/typography';
    <Text style={typography.h1}>Title</Text>
 */

export const typography = {
  h1: {
    fontFamily: "Inter-Bold",
    fontSize: 24,
    lineHeight: 32,
  },
  h2: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
    lineHeight: 28,
  },
  h3: {
    fontFamily: "Inter-SemiBold",
    fontSize: 17,
    lineHeight: 24,
  },
  body: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  bodyMedium: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    lineHeight: 20,
  },
  bodySm: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  caption: {
    fontFamily: "Inter-Regular",
    fontSize: 11,
    lineHeight: 16,
  },
  label: {
    fontFamily: "Inter-SemiBold",
    fontSize: 11,
    lineHeight: 16,
  },
  button: {
    fontFamily: "Inter-SemiBold",
    fontSize: 15,
    lineHeight: 24,
  },
} as const;

// Type helper for autocomplete
export type Typography = typeof typography;
