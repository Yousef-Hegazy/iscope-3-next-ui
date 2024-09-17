import type { Config } from "tailwindcss";
import { content, fontFamily } from "tailwindcss/defaultTheme";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "zahid-blue-bg": "#1358d0",
        "zahid-yellow-btn": "#fff250",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0.2rem", // rounded-small
          medium: "0.5rem", // rounded-medium
          large: "0.8rem", // rounded-large
        },
      },
      themes: {
        "light-orange": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(20, 14.3%, 4.1%)",
            primary: {
              DEFAULT: "hsl(24.6, 95%, 53.1%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
            secondary: {
              DEFAULT: "hsl(60, 4.8%, 95.9%)",
              foreground: "hsl(24, 9.8%, 10%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
          },
        },
        "light-slate": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(222.2, 84%, 4.9%)",
            primary: {
              DEFAULT: "hsl(222.2, 47.4%, 11.2%)",
              foreground: "hsl(210, 40%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(210, 40%, 96.1%)",
              foreground: "hsl(222.2, 47.4%, 11.2%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(210, 40%, 98%)",
            },
          },
        },
        "light-zinc": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(240, 10%, 3.9%)",
            primary: {
              DEFAULT: "hsl(240, 5.9%, 10%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(240, 4.8%, 95.9%)",
              foreground: "hsl(240, 5.9%, 10%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "light-stone": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(20, 14.3%, 4.1%)",
            primary: {
              DEFAULT: "hsl(24, 9.8%, 10%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
            secondary: {
              DEFAULT: "hsl(60, 4.8%, 95.9%)",
              foreground: "hsl(24, 9.8%, 10%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
          },
        },
        "light-gray": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(224, 71.4%, 4.1%)",
            primary: {
              DEFAULT: "hsl(220.9, 39.3%, 11%)",
              foreground: "hsl(210, 20%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(220, 14.3%, 95.9%)",
              foreground: "hsl(220.9, 39.3%, 11%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(210, 20%, 98%)",
            },
          },
        },
        "light-neutral": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(0, 0%, 3.9%)",
            primary: {
              DEFAULT: "hsl(0, 0%, 9%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(0, 0%, 96.1%)",
              foreground: "hsl(0, 0%, 9%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "light-red": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(0, 0%, 3.9%)",
            primary: {
              DEFAULT: "hsl(0, 72.2%, 50.6%)",
              foreground: "hsl(0, 85.7%, 97.3%)",
            },
            secondary: {
              DEFAULT: "hsl(0, 0%, 96.1%)",
              foreground: "hsl(0, 0%, 9%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "light-rose": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(240, 10%, 3.9%)",
            primary: {
              DEFAULT: "hsl(346.8, 77.2%, 49.8%)",
              foreground: "hsl(355.7, 100%, 97.3%)",
            },
            secondary: {
              DEFAULT: "hsl(240, 4.8%, 95.9%)",
              foreground: "hsl(240, 5.9%, 10%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "light-green": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(240, 10%, 3.9%)",
            primary: {
              DEFAULT: "hsl(142.1, 76.2%, 36.3%)",
              foreground: "hsl(355.7, 100%, 97.3%)",
            },
            secondary: {
              DEFAULT: "hsl(240, 4.8%, 95.9%)",
              foreground: "hsl(240, 5.9%, 10%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "light-blue": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(222.2, 84%, 4.9%)",
            primary: {
              DEFAULT: "hsl(221.2, 83.2%, 53.3%)",
              foreground: "hsl(210, 40%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(210, 40%, 96.1%)",
              foreground: "hsl(222.2, 47.4%, 11.2%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(210, 40%, 98%)",
            },
          },
        },
        "light-yellow": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(20, 14.3%, 4.1%)",
            primary: {
              DEFAULT: "hsl(47.9, 95.8%, 53.1%)",
              foreground: "hsl(26, 83.3%, 14.1%)",
            },
            secondary: {
              DEFAULT: "hsl(60, 4.8%, 95.9%)",
              foreground: "hsl(24, 9.8%, 10%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
          },
        },
        "light-violet": {
          extend: "light",
          colors: {
            background: "hsl(0, 0%, 100%)",
            foreground: "hsl(224, 71.4%, 4.1%)",
            primary: {
              DEFAULT: "hsl(262.1, 83.3%, 57.8%)",
              foreground: "hsl(210, 20%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(220, 14.3%, 95.9%)",
              foreground: "hsl(220.9, 39.3%, 11%)",
            },
            danger: {
              DEFAULT: "hsl(0, 84.2%, 60.2%)",
              foreground: "hsl(210, 20%, 98%)",
            },
          },
        },
        "dark-orange": {
          extend: "dark",
          colors: {
            background: "hsl(20, 14.3%, 4.1%)",
            foreground: "hsl(60, 9.1%, 97.8%)",
            primary: {
              DEFAULT: "hsl(20.5, 90.2%, 48.2%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
            secondary: {
              DEFAULT: "hsl(12, 6.5%, 15.1%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
            danger: {
              DEFAULT: "hsl(0, 72.2%, 50.6%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
          },
        },
        "dark-slate": {
          extend: "dark",
          colors: {
            background: "hsl(222.2, 84%, 4.9%)",
            foreground: "hsl(210, 40%, 98%)",
            primary: {
              DEFAULT: "hsl(210, 40%, 98%)",
              foreground: "hsl(222.2, 47.4%, 11.2%)",
            },
            secondary: {
              DEFAULT: "hsl(217.2, 32.6%, 17.5%)",
              foreground: "hsl(210, 40%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(210, 40%, 98%)",
            },
          },
        },
        "dark-zinc": {
          extend: "dark",
          colors: {
            background: "hsl(240, 10%, 3.9%)",
            foreground: "hsl(0, 0%, 98%)",
            primary: {
              DEFAULT: "hsl(0, 0%, 98%)",
              foreground: "hsl(240, 5.9%, 10%)",
            },
            secondary: {
              DEFAULT: "hsl(240, 3.7%, 15.9%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "dark-stone": {
          extend: "dark",
          colors: {
            background: "hsl(20, 14.3%, 4.1%)",
            foreground: "hsl(60, 9.1%, 97.8%)",
            primary: {
              DEFAULT: "hsl(60, 9.1%, 97.8%)",
              foreground: "hsl(24, 9.8%, 10%)",
            },
            secondary: {
              DEFAULT: "hsl(12, 6.5%, 15.1%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
          },
        },
        "dark-gray": {
          extend: "dark",
          colors: {
            background: "hsl(224, 71.4%, 4.1%)",
            foreground: "hsl(210, 20%, 98%)",
            primary: {
              DEFAULT: "hsl(210, 20%, 98%)",
              foreground: "hsl(220.9, 39.3%, 11%)",
            },
            secondary: {
              DEFAULT: "hsl(215, 27.9%, 16.9%)",
              foreground: "hsl(210, 20%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(210, 20%, 98%)",
            },
          },
        },
        "dark-neutral": {
          extend: "dark",
          colors: {
            background: "hsl(0, 0%, 3.9%)",
            foreground: "hsl(0, 0%, 98%)",
            primary: {
              DEFAULT: "hsl(0, 0%, 98%)",
              foreground: "hsl(0, 0%, 9%)",
            },
            secondary: {
              DEFAULT: "hsl(0, 0%, 14.9%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "dark-red": {
          extend: "dark",
          colors: {
            background: "hsl(0, 0%, 3.9%)",
            foreground: "hsl(0, 0%, 98%)",
            primary: {
              DEFAULT: "hsl(0, 72.2%, 50.6%)",
              foreground: "hsl(0, 85.7%, 97.3%)",
            },
            secondary: {
              DEFAULT: "hsl(0, 0%, 14.9%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(0, 0%, 98%)",
            },
          },
        },
        "dark-rose": {
          extend: "dark",
          colors: {
            background: "hsl(20, 14.3%, 4.1%)",
            foreground: "hsl(0, 0%, 95%)",
            primary: {
              DEFAULT: "hsl(346.8, 77.2%, 49.8%)",
              foreground: "hsl(355.7, 100%, 97.3%)",
            },
            secondary: {
              DEFAULT: "hsl(240, 3.7%, 15.9%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(0, 85.7%, 97.3%)",
            },
          },
        },
        "dark-green": {
          extend: "dark",
          colors: {
            background: "hsl(20, 14.3%, 4.1%)",
            foreground: "hsl(0, 0%, 95%)",
            primary: {
              DEFAULT: "hsl(142.1, 70.6%, 45.3%)",
              foreground: "hsl(144.9, 80.4%, 10%)",
            },
            secondary: {
              DEFAULT: "hsl(240, 3.7%, 15.9%)",
              foreground: "hsl(0, 0%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(0, 85.7%, 97.3%)",
            },
          },
        },
        "dark-blue": {
          extend: "dark",
          colors: {
            background: "hsl(222.2, 84%, 4.9%)",
            foreground: "hsl(210, 40%, 98%)",
            primary: {
              DEFAULT: "hsl(217.2, 91.2%, 59.8%)",
              foreground: "hsl(222.2, 47.4%, 11.2%)",
            },
            secondary: {
              DEFAULT: "hsl(217.2, 32.6%, 17.5%)",
              foreground: "hsl(210, 40%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(210, 40%, 98%)",
            },
          },
        },
        "dark-yellow": {
          extend: "dark",
          colors: {
            background: "hsl(20, 14.3%, 4.1%)",
            foreground: "hsl(60, 9.1%, 97.8%)",
            primary: {
              DEFAULT: "hsl(47.9, 95.8%, 53.1%)",
              foreground: "hsl(26, 83.3%, 14.1%)",
            },
            secondary: {
              DEFAULT: "hsl(12, 6.5%, 15.1%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(60, 9.1%, 97.8%)",
            },
          },
        },
        "dark-violet": {
          extend: "dark",
          colors: {
            background: "hsl(224, 71.4%, 4.1%)",
            foreground: "hsl(210, 20%, 98%)",
            primary: {
              DEFAULT: "hsl(263.4, 70%, 50.4%)",
              foreground: "hsl(210, 20%, 98%)",
            },
            secondary: {
              DEFAULT: "hsl(215, 27.9%, 16.9%)",
              foreground: "hsl(210, 20%, 98%)",
            },
            danger: {
              DEFAULT: "hsl(0, 62.8%, 30.6%)",
              foreground: "hsl(210, 20%, 98%)",
            },
          },
        },
      },
    }),
  ],
};
export default config;
