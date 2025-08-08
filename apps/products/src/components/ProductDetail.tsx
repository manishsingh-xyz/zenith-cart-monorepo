// src/components/ProductDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, RootState } from "container/store";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log("🛒 Cart State:", cart);
  }, [cart]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-60 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">${product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
