import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { BsArrowRight, BsStarHalf } from "react-icons/bs";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Product = () => {
  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext);
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
          <div className="flex lg:flex-col md:flex-col overflow-x-auto  justify-between sm:justify-normal lg:w-36 w-full">
            {productData.images.map((image) => (
              <div key={image}>
                <img
                onClick={() => setImage(image)}
                className=" w-full md:w-[100px] lg:h-[120px] lg:w-[130px] md:h-[100px] h-[70px] sm:mb-3 flex-shrink-0 cursor-pointer"
                src={image}
                
                alt=""
              />
              </div>
            ))}
          </div>
          <div className="w-full h-full md:h-[400px] md:w-[80%] lg:w-[80%]">
            <img className="w-full h-auto " src={Image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <Rating style={{ maxWidth: 150 }}  value={productData.rating}/>
            <p>({productData.ratingCount})</p>
          </div>
          <p className="mmt-5 text-3xl font-medium">{currency} {productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
