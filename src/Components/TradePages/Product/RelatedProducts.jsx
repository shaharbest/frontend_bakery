import React from 'react'
// import { useProduct } from '../../../contexts/ProductContext'

function RelatedProducts() {
  // const product = useProduct()

  return (
    <div className="space-x-1">
      <span>related:</span>
      <span className="space-x-1 underline">
        {/* {product.related_products. */}
        {['aa', 'bb', 'cc'].map((curRelatedProduct) => (
          <a key={curRelatedProduct} href="https://google.com">
            {curRelatedProduct}
          </a>
        ))}
      </span>
    </div>
  )
}

export default RelatedProducts
