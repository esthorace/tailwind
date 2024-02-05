/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.html", "src/logo-app.svg"],
  theme: {
    extend: {},
  },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
      themes: ["light", "dark",
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            "primary": "#fb923c",
            "secondary": "#55b3df",
            "accent": "#a3e635",
            "neutral": "#1f2937",
            "base": "#e4f4ff",
            "base-300": "#d5eeff",
            "info": "#c084fc",
            "success": "#34d399",
            "warning": "#fde047",
            "error": "#fb7185",
         },
          dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            "primary": "#fb923c",
            "secondary": "#7dd3fc",
            "accent": "#a3e635",
            "neutral": "#1f2937",
            "base-100": "#4b5563",
            "base-300": "#1f2937",
            "info": "#c084fc",
            "success": "#34d399",
            "warning": "#fde047",
            "error": "#fb7185",
          },
        },
      ],
    },
}
