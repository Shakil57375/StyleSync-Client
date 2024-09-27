import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSallers = () => {
  const { products } = useContext(ShopContext);
  const [bestSallersProducts, setbestSallersProducts] = useState([]);

  useEffect(() => {
    const filteredbestSallersProducts = products.filter((product) => product.bestseller === true);
    setbestSallersProducts(filteredbestSallersProducts);
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-2xl">
        <Title title={"BestSallers Products"} subtitle={"Watchout the best sales this week"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4">
        {bestSallersProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSallers;
