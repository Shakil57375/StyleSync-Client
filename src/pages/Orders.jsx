import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css";
const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (products.length === 0) {
    return (
      <p className="text-center text-lg">
        Your Order List is empty.{" "}
        <Link to={"/collection"} className="text-blue-600 italic link">
          Order
        </Link>{" "}
        a product know
      </p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Title title={"My Orders"} />

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-6 text-left">#</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Size</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            {/* Change header alignment */}
          </tr>
        </thead>
        <tbody>
          {products.slice(1, 4).map((product, index) => (
            <tr key={product._id} className="border-b hover:bg-gray-100">
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
                <p className="text-xl">{product.name}</p>
              </td>
              {/* Product Name */}
              <td className="py-4 px-6">
                <p className="text-xl pl-5">M</p>
              </td>
              {/* Product Name */}
              <td className="py-4 px-6">
                <p className="text-xl pl-5">3</p>
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

              {/* Order Date */}
              <td className="py-4 px-6">
                <span>12-03-2024</span>
              </td>

              {/* Product order status */}
              <td className="py-4 px-6  ">
                <span>Ready to ship</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
