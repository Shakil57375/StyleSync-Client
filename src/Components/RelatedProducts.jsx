import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (product) => category === product.category
      );
      productsCopy = productsCopy.filter(
        (product) => subCategory === product.subCategory
      );
      console.log(productsCopy.slice(0, 5));
    }
  }, [products]);
  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
