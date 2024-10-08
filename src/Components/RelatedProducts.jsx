import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory , currentProductId}) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Filter products that match either the category or subCategory
      const filteredProducts = products.filter(
        (product) =>
          (product.category === category || product.subCategory === subCategory) &&
          product._id !== currentProductId // Exclude current product
      );

      setRelated(filteredProducts);
    }
  }, [products, category, subCategory, currentProductId]);

  return (
    <div>
      <Title title={"Related Products"}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-4">
        {related.length > 0 ? (
          related.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
