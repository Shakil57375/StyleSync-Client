import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css"; // Custom styles to override slick-carousel defaults
import "./ProductItem.css";
import { FaShoppingCart } from "react-icons/fa";
const ProductItem = ({ product }) => {
  const { currency, addToCart} = useContext(ShopContext);
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
        breakpoint: 1024, // for tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // for mobile devices
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
    <Link
      to={`/product/${product?._id}`}
      className="text-gray-700 cursor-pointer"
    >
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md  ">
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
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.name}
          </h5>
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
            {/* <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    aria-hidden="true"
                                    className={`h-5 w-5 ${i < product.rating ? "text-yellow-300" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            ))}
                            <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                {product.rating}.0
                            </span>
                        </div> */}
          </div>
          <button  class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <div className="flex gap-3 items-center text-white">
                <FaShoppingCart className="text-3xl " />
                <p>Add to cart</p>
              </div>
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
