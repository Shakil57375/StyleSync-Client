import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      
    </Link>
  )
}

export default ProductItem
