// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { federation } from "@module-federation/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   build: {
//     target: "esnext",
//     minify: false,
//     modulePreload: false,
//   },
//   plugins: [
//     federation({
//       name: "container",
//       remotes: {
//         products: {
//           type: "module",
//           name: "products",
//           entry: "http://localhost:3000/remoteEntry.js",
//           entryGlobalName: "remote",
//           shareScope: "default",
//         },
//       },
//       filename: "remoteEntry.js",
//       library: { type: "module" },
//       exposes: {
//         "./store": "./src/store/index.ts",
//       },
//       shared: {
//         react: { requiredVersion: "^19.1.1", singleton: true },
//         "react-dom": { requiredVersion: "^19.1.1", singleton: true },
//         "react-redux": { requiredVersion: "^9.1.1", singleton: true },
//         "@reduxjs/toolkit": { requiredVersion: "^2.8.2", singleton: true },
//       },
//     }),
//     react(),
//   ],
// });

// container/vite.config.ts
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
      name: "container",
      filename: "remoteEntry.js",
      library: { type: "module" },
      remotes: {
        products: {
          type: "module",
          name: "products",
          entry: "http://localhost:3000/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      exposes: {
        "./store": "./src/store/index.ts",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.1.1" },
        "react-dom": { singleton: true, requiredVersion: "^19.1.1" },
        "react-redux": { singleton: true, requiredVersion: "^9.1.1" },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: "^2.8.2" },
      },
    }),
  ],
});
