import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
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
      toast.error("Please select a size", {
        position: "top-center",
        autoClose: 2000,
      });
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
    toast.success("Added to the cart", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = async () =>{
    let totalAmount = 0;
    for(const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items)
    }
  }

  const updateQuantity = (productId, size, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
  
      // Check if product exists in cart
      if (!updatedCartItems[productId]) {
        console.error(`Product with id ${productId} not found`);
        return prevCartItems;
      }
  
      // Check if the size exists for this product
      if (!updatedCartItems[productId][size]) {
        console.error(`Size ${size} not found for product ${productId}`);
        return prevCartItems;
      }

      console.log("here",[productId])
  
      // If new quantity is 0, remove the size from the product
      if (newQuantity === 0) {
        delete updatedCartItems[productId][size];
  
        // If there are no more sizes for this product, remove the product from the cart
        if (Object.keys(updatedCartItems[productId]).length === 0) {
          delete updatedCartItems[productId];
        }
      } else {
        // Otherwise, update the quantity
        updatedCartItems[productId][size] = newQuantity;
      }
  
      return updatedCartItems;
    });
  };
  

  // Manage Wish List
  const toggleWishList = (itemId) => {
    let wishListData = structuredClone(wishList);
    if (wishListData[itemId]) {
      delete wishListData[itemId];
      toast.error("Removed from Wish List", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      wishListData[itemId] = true;
      toast.success("Added to Wish List", {
        position: "top-center",
        autoClose: 2000,
      });
    }
    setWishList(wishListData);
  };

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
    getCartCount,
    updateQuantity
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
