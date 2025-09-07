const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111111",
        primary: {
          DEFAULT: "#00cccc",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#4ca1af",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#e6f8f8",
          foreground: "#00cccc",
        },
        card: {
          DEFAULT: "#f9f9f9",
          foreground: "#111111",
        },
        popover: {
          DEFAULT: "#f1f5f9",
          foreground: "#111111",
        },
        muted: {
          DEFAULT: "#e0e0e0",
          foreground: "#666666",
        },
        border: "#dddddd",
        input: "#ffffff",
        ring: "#00cccc",
        destructive: {
          DEFAULT: "#ff4d4f",
          foreground: "#ffffff",
        },
        chart: {
          "1": "#00cccc",
          "2": "#00a3a3",
          "3": "#007777",
          "4": "#005555",
          "5": "#003f3f",
        },
        sidebar: {
          DEFAULT: "#f5f5f5",
          foreground: "#111111",
          primary: "#00cccc",
          "primary-foreground": "#ffffff",
          accent: "#b2ebeb",
          "accent-foreground": "#00cccc",
          border: "#dddddd",
          ring: "#00cccc",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 204, 204, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 204, 204, 0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;