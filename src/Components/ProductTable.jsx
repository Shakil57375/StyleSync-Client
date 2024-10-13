import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css";
import { ShopContext } from "../context/ShopContext";

const ProductTable = ({ product, index }) => {
  const { currency, toggleWishList } = useContext(ShopContext);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <tr className="border-b hover:bg-gray-100">
      {/* Serial Number */}
      <td className="py-4 px-6">{index + 1}</td>

      {/* Product Image Slider */}
      <td className="py-4 px-6">
        <div className="w-40 h-40 overflow-hidden rounded-xl">
          <Slider {...sliderSettings}>
            {product.images?.map((image, index) => (
              <div key={index} className="custom-slider">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </td>

      {/* Product Name */}
      <td className="py-4 px-6">
        <p className="text-2xl">{product.name}</p>
      </td>

      {/* Product Price */}
      <td className="py-4 px-6">
        {currency}
        {product.discountPrice}
        {product.price && (
          <span className="text-sm text-gray-500 line-through ml-2">
            {currency}
            {product.price}
          </span>
        )}
      </td>

      {/* Actions (Details and Remove) */}
      <td className="py-4 px-6">
        <div className="grid justify-center items-center gap-2">
          {" "}
          {/* Apply grid for centering */}
          {/* Details Button */}
          <Link
            to={`/product/${product?._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Details
          </Link>
          {/* Remove Button */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => toggleWishList(product._id)} // Remove product from wishlist
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
