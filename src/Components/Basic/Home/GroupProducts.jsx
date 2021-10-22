import React from 'react'
import Carousel from '../../Utils/Carousel/Carousel'
import ProductCard from '../../TradePages/Store/ProductCard'

function GroupProducts({ group }) {
  return (
    <div className="bg-d1">
      <div className="grid grid-cols-2 justify-items-center py-2">
        <h1 className="text-left">{group.name}</h1>
        <button className="btn" onClick={() => console.log('TODO')}>
          see all
        </button>
      </div>

      <Carousel show={3}>
        {group.products.map((curProduct) => (
          <div key={curProduct.id} className="border">
            <ProductCard product={curProduct} alt="product" />
          </div>
        ))}
      </Carousel>
      <div className="text-right"></div>
    </div>
  )
}

export default GroupProducts
