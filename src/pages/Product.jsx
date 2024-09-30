import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const {productId} = useParams()
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false);
  const [Image, setImage] = useState("");
  const fetchProductData = () =>{
    const productIdNumber = parseInt(productId, 10);
    products.map((product)=>{
      if(product._id === productIdNumber){
        setProductData(product)
        setImage(product.images[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [products, productId]);

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 flex-col sm:flex-row '>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3 '>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w[18.7%] w-full'>
              {
                productData.images.map((image)=>(
                  <img className='w-24 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={image} key={image}  alt="" />
                ))
              }
            </div>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
