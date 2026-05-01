/**
SecureSync Design System — Spacing Tokens

Usage:
    import { spacing } from '@/theme/spacing';
    padding: spacing.lg
 */

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  touch: 48,
} as const;

// Type helper for autocomplete
export type Spacing = typeof spacing;
