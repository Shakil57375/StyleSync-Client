import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { delivery_fee, currency, getCartAmount } = useContext(ShopContext);

  // Calculate subtotal and total
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;
  console.log(typeof(subtotal), typeof(total));
  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title title={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {subtotal.toFixed(2)}</p> {/* Subtotal with 2 decimal places */}
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>{currency} {delivery_fee.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {total.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
