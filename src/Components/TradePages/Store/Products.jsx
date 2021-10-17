import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="grid grid-cols-3">
      {products.map((curProduct) => (
        <ProductCard key={curProduct.id} product={curProduct} />
      ))}
    </div>
  )
}

export default Products
