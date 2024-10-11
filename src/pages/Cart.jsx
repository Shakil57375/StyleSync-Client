import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";  // Import SweetAlert2

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

  const handleDelete = (productId, size) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this product from the cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call updateQuantity to remove the product
        updateQuantity(productId, size, 0);

        // Display a success message after deletion
        Swal.fire(
          'Deleted!',
          'Your product has been removed from the cart.',
          'success'
        );
      } else {
        // Optional: You can add a message when the user cancels the action
        Swal.fire(
          'Cancelled',
          'Your product is safe :)',
          'info'
        );
      }
    });
  };

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
            <input 
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" 
              type="text" 
              min={1} 
              defaultValue={item.quantity} 
            />
            <MdDelete 
              onClick={() => handleDelete(item._id, item.size)} 
              className="mr-4 cursor-pointer text-2xl text-red-600"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
