// // products-mfe/vite.config.ts
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { federation } from "@module-federation/vite";

// export default defineConfig({
//   build: {
//     target: "esnext",
//     modulePreload: false,
//   },
//   plugins: [
//     federation({
//       name: "products",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./featured-products": "./src/components/FeaturedProductsList.tsx",
//       },
//       remotes: {
//         container: "container@http://localhost:5173/remoteEntry.js", // ✅ Correct format
//       },
//       shared: {
//         react: { singleton: true, requiredVersion: "^19.1.1" },
//         "react-dom": { singleton: true, requiredVersion: "^19.1.1" },
//         "react-redux": { singleton: true, requiredVersion: "^9.1.1" },
//         "@reduxjs/toolkit": { singleton: true, requiredVersion: "^2.8.2" },
//         "@zenith/ui": { singleton: true, requiredVersion: "0.1.0" },
//       },
//     }),
//     react(),
//   ],
// });

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
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./AppRoutes": "./src/routes.tsx",
        "./featured-products": "./src/components/FeaturedProductsList.tsx",
        "./product-List": "./src/components/ProductList.tsx",
        // "./ProductsApp": "./src/components/ProductsApp.tsx",
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
        "react-router-dom": { singleton: true, requiredVersion: "6.22.3" },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: "^2.8.2" },
        "@zenith/ui": { singleton: true, requiredVersion: "0.1.0" },
        // "container/store": { singleton: true }, // <- host store
      },
    }),
  ],
  base: "http://localhost:3000/",
});
