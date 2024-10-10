import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({})
  // const addToCart = async (itemId, size) => {
  //   let cartData = structuredClone(cartItems)
  //   if(cartData[itemId]){
  //     if(cartData[itemId]){
  //       cartData[itemId][size]++
  //     }
  //     else{
  //       cartData[itemId][size]= 1
  //     }
  //   }
  //   else{
  //     cartData[itemId] = {}
  //     cartData[itemId][size] = 1
  //   }
  //   setCartItems(cartData)
  // }

  const addToCart = async (itemId, size) => {
    if(!size){
      toast.error("Please select a size")
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      // Check if the size exists, otherwise, initialize it
      if (cartData[itemId][size]) {
        cartData[itemId][size]++; // Increment quantity if size exists
      } else {
        cartData[itemId][size] = 1; // Initialize size if not present
      }    
    } else {
      // Initialize item and size if product is not in cart
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  
  // Don't forget to update the cart state when the component re-renders
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]); // Add cartItems as a dependency to ensure it logs the latest changes
  

  useEffect(()=>{
    console.log(cartItems)
  },[])

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
