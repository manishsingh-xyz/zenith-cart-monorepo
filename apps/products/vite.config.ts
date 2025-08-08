import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";
export default defineConfig(() => {
  return {
    build: {
      target: "chrome89",
    },
    plugins: [
      federation({
        filename: "remoteEntry.js",
        name: "products",
        exposes: {
          "./featured-products": "./src/components/FeaturedProductsList.tsx",
        },
        remotes: {},
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
          "@zenith/ui": { singleton: true, requiredVersion: "0.1.0" },
        },
      }),
      react(),
    ],
  };
});
