import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
  return (
    <div>RelatedProducts</div>
  )
}

export default RelatedProducts