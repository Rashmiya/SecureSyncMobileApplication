/**
SecureSync Design System — Border Radius Tokens

Usage:
    import { radius } from '@/theme/radius';
    borderRadius: radius.lg
 */

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
  bubble: 18,
  bubbleTail: 4,
} as const;

// Type helper for autocomplete
export type Radius = typeof radius;
