import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title'

const Orders = () => {
  const {products, currency} = useContext(ShopContext)
  return (
    <div className='border-t pt-4'>
      <div className='text-2xl'>
        <Title title={"My Orders"}/>
      </div>
      <div>
        {
          products.slice(1,4).map((product) => (
            <div key={product._id} className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 md:w-20"
                  src={product.images[0]}
                  alt=""
                />
                <div>
                  <p className='text-base font-medium'>{product.name}</p>
                </div>
                <div>
                  <div className="text-sm font-bold">{product.title}</div>
                  <div className="text-gray-500 text-xs">
                    {currency}{product.price}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
