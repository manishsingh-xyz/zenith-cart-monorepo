// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// products-mfe/src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "container/store"; // federated import
import CartPreview from "./components/CartPreview";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartPreview />
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
