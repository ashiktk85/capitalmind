/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: "#16a34a",   // Primary green
            light: "#22c55e",     // Hover / lighter
            dark: "#15803d",      // Active / darker
          },
          accent: {
            DEFAULT: "#2563eb",   // Blue
            light: "#3b82f6",
            dark: "#1d4ed8",
          },
          muted: {
            DEFAULT: "#6b7280",   // Gray text
            light: "#9ca3af",     // Subtle
            dark: "#374151",      // Strong gray
          },
          bg: {
            light: "#ffffff",     // White background
            soft: "#f9fafb",      // Dashboard background
            dark: "#111827",      // Sidebar dark
          },
          danger: {
            DEFAULT: "#dc2626",   // Red
            light: "#f87171",
            dark: "#991b1b",
          },
          warning: {
            DEFAULT: "#f59e0b",   // Amber
            light: "#fbbf24",
            dark: "#b45309",
          },
          success: {
            DEFAULT: "#10b981",   // Teal/green success
            light: "#34d399",
            dark: "#047857",
          },
        },
      },
    },
    plugins: [],
  }
  