import type { RouteObject } from "react-router-dom";
import CartPage from "./pages/CartPage";

const routes: RouteObject[] = [
  {
    path: "/cart",
    element: <CartPage />,
  },
];

export default routes;
