/**
SecureSync Design System — Color Tokens
    
Usage:
    import { colors } from '@/theme/colors';
    backgroundColor: colors.brand.primary
 */

export const colors = {
  brand: {
    primary: "#00AACC",
    primaryLight: "#E6F7FB",
  },

  background: {
    page: "#F7F8FA",
    surface: "#FFFFFF",
    input: "#F0F2F5",
  },

  text: {
    primary: "#0D1117",
    secondary: "#5A6478",
    tertiary: "#9AA0AE",
    onBrand: "#FFFFFF",
  },

  border: {
    default: "#DDE1EA",
  },

  semantic: {
    success: "#12A060",
    warning: "#D4870F",
    danger: "#D93250",
  },

  tag: {
    confidential: "#D93250",
    internal: "#00AACC",
    client: "#D4870F",
    general: "#12A060",
  },

  dark: {
    page: "#0B1220",
    surface: "#131B2E",
  },
} as const;

// Type helper for autocomplete
export type Colors = typeof colors;
