import { useEffect, useState } from "react";
import { ProductListItem } from "../components/ProductListItem";
import { type IProduct } from "../interfaces/IProduct";
import "./ProductsList.css";
import FeaturedProductsList from "../components/FeaturedProductsList";
import { Button } from "@zenith/ui";

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsResponse = await fetch("https://dummyjson.com/products");
      const productsResponseJson = await productsResponse.json();
      setProducts(productsResponseJson.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="product-list-container">
      <div className="p-4">
        <h4 className="bg-red-400">Test tailwind</h4>
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        <Button onClick={() => alert("Buying...")}>Buy Now</Button>
      </div>

      <h2>Products</h2>
      <FeaturedProductsList></FeaturedProductsList>
      <h2 className="heading">All Products</h2>
      <div className="products-list">
        {products.map((item) => (
          <ProductListItem product={item}></ProductListItem>
        ))}
      </div>
    </div>
  );
};
