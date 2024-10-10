import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css"; // Custom styles to override slick-carousel defaults
import "./ProductItem.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductItem = ({ product }) => {
  const { currency, wishList, toggleWishList } = useContext(ShopContext);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 h-60 overflow-hidden rounded-xl">
          <Slider {...settings}>
            {product.images?.map((image, index) => (
              <div key={index} className="custom-slider">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="object-cover h-[300px] w-[450px] rounded-lg transition duration-500 hover:scale-125"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {currency}
                {product.discountPrice}
              </span>
              {product.price && (
                <span className="text-sm text-slate-900 line-through ml-2">
                  {currency}
                  {product.price}
                </span>
              )}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to={`/product/${product?._id}`}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <div className="flex gap-3 items-center text-white">
                  <p>Details</p>
                </div>
              </span>
            </Link>

            {/* Wishlist Button */}
            <button
              className="text-xl ml-4"
              onClick={() => toggleWishList(product._id)}
            >
              {wishList[product._id] ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
