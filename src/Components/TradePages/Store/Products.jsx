import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="m-2 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((curProduct) => (
        <ProductCard key={curProduct.id} product={curProduct} />
      ))}
    </div>
  )
}

export default Products
