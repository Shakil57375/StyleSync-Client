import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const {prodcuts} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/* Category Filter */}
        <div className={`broder border-gray-300 pl-5 mt-6 py-3 ${showFilter ? "" : "hidden"} sm:block`}>
          
        </div>
      </div>
    </div>
  )
}

export default Collection
