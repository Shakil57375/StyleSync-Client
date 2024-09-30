import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { BsStarHalf } from "react-icons/bs";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [Image, setImage] = useState("");
  const fetchProductData = () => {
    const productIdNumber = parseInt(productId, 10);
    products.map((product) => {
      if (product._id === productIdNumber) {
        setProductData(product);
        setImage(product.images[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row ">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-2">
          <div className="flex lg:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal lg:w-36 w-full">
            {productData.images.map((image) => (
              <img
                onClick={() => setImage(image)}
                className="lg:w-36 w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={image}
                key={image}
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[80%]">
            <img className="w-full h-auto" src={Image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <FaStar className="text-yellow-500 text-xl"/>
            <FaStar className="text-yellow-500 text-xl"/>
            <FaStar className="text-yellow-500 text-xl"/>
            <FaStar className="text-yellow-500 text-xl"/>
            <BsStarHalf className="text-yellow-500 text-xl"/>
            <p>(111)</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
