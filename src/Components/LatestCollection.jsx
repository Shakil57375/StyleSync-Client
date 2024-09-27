import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useState } from "react";
import { useEffect } from "react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])
  useEffect(()=>{
    setLatestProducts(products.slice(0,10))
  },[])
  return (
    <div className="my-10">
      <div className="text-center py-8 text-2xl">
        <Title title={"Latest Products"} subtitle={"Seamless Style and Sound Collection"} />
      </div>
      {
        
      }
    </div>
  );
};

export default LatestCollection;
