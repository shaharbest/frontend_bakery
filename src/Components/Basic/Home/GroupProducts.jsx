import React from 'react'
import Carousel from '../../Utils/Carousel/Carousel'
import ProductCard from '../../TradePages/Store/ProductCard'
import { getProduct } from '../../../DataBaseAccess'

function GroupProducts({ group, goToStoreFiltered }) {
  return (
    <div className="mb-5 bg-d1">
      <div className="grid grid-cols-2 justify-items-center py-2">
        <h1 className="text-left">{group.name}</h1>
        <button className="btn" onClick={goToStoreFiltered}>
          see all
        </button>
      </div>

      <Carousel show={3}>
        {group.productsId.map((curProductId) => (
          <div key={curProductId} className="border">
            <ProductCard product={getProduct(curProductId)} alt="product" />
          </div>
        ))}
      </Carousel>
      <div className="text-right"></div>
    </div>
  )
}

export default GroupProducts
