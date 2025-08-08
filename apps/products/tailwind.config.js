import { Config } from "tailwindcss";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // if using @zenith/ui
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
