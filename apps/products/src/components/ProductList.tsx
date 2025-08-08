// src/components/ProductList.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart, RootState } from "container/store";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    console.log("🛒 Cart State:", cart);
  }, [cart]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg"
        >
          <Link to={`/products/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </Link>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
