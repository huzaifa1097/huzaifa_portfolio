/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl:"1200px",

    },
    fontFamily: {
      primary : "var(--font-jetbrainsMono)",
    },
    extend: {
      colors:{
        primary:'#0a0a12',
        surface:{
          DEFAULT: '#151521',
          raised: '#1c1c2e',
        },
        accent:{
          DEFAULT: '#00f0ff',
          hover: '#33f5ff',
          purple: '#a855f7',
          magenta: '#ff2ea6',
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00f0ff 0%, #a855f7 50%, #ff2ea6 100%)',
        'neon-gradient-soft': 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(168,85,247,0.15), rgba(255,46,166,0.15))',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,240,255,0.35), 0 0 60px rgba(0,240,255,0.15)',
        'glow-purple': '0 0 20px rgba(168,85,247,0.35), 0 0 60px rgba(168,85,247,0.15)',
        'glow-magenta': '0 0 20px rgba(255,46,166,0.35)',
        'glass': '0 8px 32px rgba(0,0,0,0.45)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,240,255,0.35)" },
          "50%": { boxShadow: "0 0 40px rgba(0,240,255,0.6)" },
        },
        "blob-move": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "blob": "blob-move 12s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}