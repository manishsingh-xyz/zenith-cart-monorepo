import React, { Suspense } from "react";

// const FeaturedProducts = React.lazy(
//   // @ts-ignore
//   async () => import("products/featured-products")
// );

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Suspense fallback="loading...">
        <h1 className="bg-red-500"> Home page</h1>
      </Suspense>
    </div>
  );
};

export default Home;
