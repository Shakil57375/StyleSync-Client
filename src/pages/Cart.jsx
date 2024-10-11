import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-8">
      <div className="mb-3">
        <Title title={"Your Cart"} />
      </div>
      {cartData.map((item) => {
        const productData = products.find((product) => product._id == item._id);
        return (
          <div
            key={item._id}
            className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
          >
            <div className="flex items-start gap-6">
             <img className="w-16 sm:w-20" src={productData.images[0]} alt="" />
             <div>
              <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
              <div className="flex items-center gap-5 mt-2">
                <p>{currency}{productData.price}</p>
                <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
              </div>
             </div>
            </div>
            <input className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="text" min={1} defaultValue={item.quantity} />
            <MdDelete onClick={() => updateQuantity(item._id, item.size, item.quantity)} className="mr-4 cursor-pointer text-2xl text-red-600"/>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
