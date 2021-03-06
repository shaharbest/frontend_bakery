import React from 'react'
import ProductCard from './ProductCard'

const skeletonCount = 6
const skeletonArray = createSkeletonArray(skeletonCount)

function createSkeletonArray(count) {
  const arr = []
  for (let i = 0; i < count; i++) arr.push(<ProductCard key={i} />)
  return arr
}

function Products({ products, loading }) {
  if (loading) {
    return (
      <div className="md:mx-10 w-full gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skeletonArray}
      </div>
    )
  }

  return (
    <div className="md:mx-10 w-full gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map(curProduct => (
        <ProductCard key={curProduct.id} product={curProduct} />
      ))}
    </div>
  )
}

export default Products
