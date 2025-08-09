// cart-mfe/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
  },
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartApp": "./src/components/CartApp.tsx",
        "./routes": "./src/routes.tsx",
      },
      remotes: {
        container: {
          name: "container",
          entry: "http://localhost:5173/remoteEntry.js",
          type: "module", // ✅ must match host
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.1.1" },
        "react-dom": { singleton: true, requiredVersion: "^19.1.1" },
        "react-redux": { singleton: true, requiredVersion: "^9.1.1" },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: "^2.8.2" },
        // "container/store": { singleton: true }, // <- host store
      },
    }),
  ],
  server: {
    port: 5175, // Custom port for Cart MFE
  },
  base: "http://localhost:5175/",
});
