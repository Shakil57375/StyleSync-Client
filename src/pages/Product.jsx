import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa6";
import { BsArrowRight, BsStarHalf } from "react-icons/bs";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import RelatedProducts from "../Components/RelatedProducts";
const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [Image, setImage] = useState("");
  const [Size, setSize] = useState("");
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

  // 

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
            <Rating
              style={{ maxWidth: 150 }}
              readOnly
              value={productData.rating}
            />
            <p>({productData.ratingCount})</p>
          </div>
          <p className="mmt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-orange-600 font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((productSize) => (
                <button
                  onClick={() => setSize(productSize)}
                  className={`btn ${
                    productSize === Size ? "btn-outline btn-warning" : ""
                  }`}
                  key={productSize}
                >
                  {productSize}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, Size)}
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Add to cart</span>
            </span>
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is a digital platform that enables the online
            buying and selling of products or services. Acting as a virtual
            storefront, it allows businesses and individuals to display their
            offerings, engage with customers, and complete transactions entirely
            online, eliminating the need for a physical store. The widespread
            appeal of e-commerce sites stems from the convenience they provide,
            their easy accessibility, and the ability to reach a global customer
            base.{" "}
          </p>
          <p>
            An e-commerce website typically showcases products or services with
            detailed descriptions, images, prices, and options such as different
            sizes or colors. Each product usually has its own dedicated page,
            providing all the necessary information to help customers make
            informed purchasing decisions.
          </p>
        </div>
      </div>
      {/* Display related products */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
