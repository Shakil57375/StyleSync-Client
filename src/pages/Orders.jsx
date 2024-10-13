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
      
    </div>
  )
}

export default Orders
