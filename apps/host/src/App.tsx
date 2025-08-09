import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsWrapper from "./routes/ProductsWrapper";
import { lazy } from "react";

const CartApp = lazy(() => import("cart/CartApp"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart/*" element={<CartApp />} />
      <Route path="/products/*" element={<ProductsWrapper />} />
    </Routes>
  );
}

export default App;
