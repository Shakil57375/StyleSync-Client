import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
// Custom styles to override slick-carousel defaults
import ProductTable from "../Components/ProductTable";

const WishList = () => {
  const { wishList, products, currency, toggleWishList } =
    useContext(ShopContext); // addToCart function from context
  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    // Filter the products based on the wishlist
    const filteredProducts = products.filter(
      (product) => wishList[product._id]
    );
    setWishListData(filteredProducts);
  }, [wishList, products]);


  if (wishListData.length === 0) {
    return <p className="text-center text-lg">Your Wish List is empty.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">My Wish List</h1>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-6 text-left">#</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-center">Actions</th>{" "}
            {/* Change header alignment */}
          </tr>
        </thead>
        <tbody>
          {wishListData.map((product, index) => (
            <ProductTable product={product} index ={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
