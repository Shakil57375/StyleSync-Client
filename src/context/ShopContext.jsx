import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [wishList, setWishList] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size]++;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  // Manage Wish List
  const toggleWishList = (itemId) => {
    let wishListData = structuredClone(wishList);
    if (wishListData[itemId]) {
      delete wishListData[itemId];
      toast.error("Removed from Wish List");
    } else {
      wishListData[itemId] = true;
      toast.success("Added to Wish List");
    }
    setWishList(wishListData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    console.log(wishList);
  }, [wishList]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    wishList,
    toggleWishList,
  };
  
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
