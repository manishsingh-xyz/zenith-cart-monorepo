import { lazy, Suspense } from "react";

const RemoteProductsRoutes = lazy(() => import("products/AppRoutes"));

export default function ProductsWrapper() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <RemoteProductsRoutes />
    </Suspense>
  );
}
