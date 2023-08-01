"use client";

import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AllProduct } from "./Data";
import { UserContext } from "@/app/page";
import Loader from "./Loader";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    AllProduct({ category: null }).then((products) => setAllProducts(products));
  }, []);

  useEffect(() => {
    AllProduct({ category: context?.category || null }).then((products) =>
      setAllProducts(products)
    );
  }, [context?.category]);

  return (
    <div className="p-10 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">Products for you !</h1>

      {allProducts.length === 0 ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 gap-2">
          {allProducts?.map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
