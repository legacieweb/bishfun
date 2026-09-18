export const colors = {
  // Foundation
  black: "#0A0A0A",
  nearBlack: "#0D0D0D",
  white: "#FFFFFF",
  warmWhite: "#FAFAFA",

  // Neutrals
  gray50: "#F8F8F8",
  gray100: "#F0F0F0",
  gray200: "#E4E4E4",
  gray300: "#D1D1D1",
  gray400: "#B0B0B0",
  gray500: "#8F8F8F",
  gray600: "#6B6B6B",
  gray700: "#4A4A4A",
  gray800: "#2A2A2A",
  gray900: "#1A1A1A",

  // Accent (Bishfun)
  accent: "#E85D4A",
  accentHover: "#C94738",
  accentLight: "#F18A7C",
  accentSubtle: "#FCE9E5",

  // Status
  success: "#2E8B57",
  warning: "#D4A44A",
  error: "#E74C3C",
  info: "#3498DB",

  // Transparent
  transparent: "transparent",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
  "5xl": "3rem",
  "6xl": "4rem",
  "7xl": "5rem",
  "8xl": "6rem",
} as const;

export const typography = {
  fontFamily: {
    sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    serif: "Playfair Display, Georgia, serif",
    mono: "ui-monospace, 'SFMono-Regular', Menlo, Monaco, Consolas, monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.1,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
} as const;

export const borderRadius = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
} as const;

export const transitions = {
  fast: "150ms ease-in-out",
  base: "250ms ease-in-out",
  slow: "400ms ease-in-out",
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  toast: 1400,
} as const;
