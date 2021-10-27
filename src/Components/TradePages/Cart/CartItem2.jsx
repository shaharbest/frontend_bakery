import React from 'react'
import UnitsCoutControl from './UnitsCoutControl'
import { getPriceTag } from '../../Utils/price'

function CartItem2({ product, countItems }) {
  return (
    <div className="border p-1 m-1 grid grid-cols-1 md:grid-cols-2 gap-1 items-center text-2xl">
      <ProductDetails product={product} />
      <PriceControl product={product} countItems={countItems} />
    </div>
  )
}

function PriceControl({ product, countItems }) {
  return (
    <div className="grid grid-cols-2 items-center justify-items-center">
      <UnitsCoutControl val={countItems} productId={product.id} />
      <div>{getPriceTag(product.price * countItems)}</div>
    </div>
  )
}

function ProductDetails({ product }) {
  return (
    <div className="grid grid-cols-2 items-center gap-2 justify-items-center">
      <img alt={product.name} src={product.mainImagePath} className="h-32" />
      <span>{product.name}</span>
    </div>
  )
}

export default CartItem2
