import type { Config } from "tailwindcss";
import colors from "./src/styles/tw/colors"
import { url } from "inspector";

const config: Config = {
  content: [
    './src/**/*.tsx',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './src/**/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "loader": "url('/images/uploads/assets/loader-puppy.gif')",
      },
      colors: colors,
    },
  },
  plugins: [],
  compilerOptions: {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
};
export default config;

