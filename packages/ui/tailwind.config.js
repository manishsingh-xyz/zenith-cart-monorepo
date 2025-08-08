import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/src/**/*.{js,ts,jsx,tsx}", // optional: if you want to scan consuming apps
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
