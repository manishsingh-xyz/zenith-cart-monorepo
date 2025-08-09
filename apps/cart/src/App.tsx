import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CartApp from "./components/CartApp";

function App() {
  return (
    <Suspense fallback={<div>Loading Cart...</div>}>
      <Routes>
        <Route path="/" element={<CartApp />} />
        <Route path="/cart" element={<CartApp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
