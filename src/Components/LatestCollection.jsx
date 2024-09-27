import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const filteredLatestProducts = products.filter((product) => product.latest === true);
    setLatestProducts(filteredLatestProducts);
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-2xl">
        <Title title={"Latest Products"} subtitle={"Seamless Style and Sound Collection"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4">
        {latestProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
