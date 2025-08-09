// routes.tsx (products remote)
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

const AppRoutes = () => (
  <Routes>
    {/* index route matches the parent route (/products) */}
    <Route index element={<ProductList />} />
    {/* relative route -> matches /products/:id when host mounts this under /products/* */}
    <Route path=":id" element={<ProductDetail />} />
  </Routes>
);

export default AppRoutes;
