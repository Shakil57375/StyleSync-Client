import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const {productId} = useParams()
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false);

  const fetchProductData = () =>{
    const productIdNumber = parseInt(productId, 10);
    products.map((product)=>{
      if(product._id === productIdNumber){
        setProductData(product)
        console.log(product)
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [products, productId]);

  return (
    <div>
      <p> Details</p>
    </div>
  )
}

export default Product
