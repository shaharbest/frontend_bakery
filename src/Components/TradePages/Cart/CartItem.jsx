import React from 'react'
import { Link } from 'react-router-dom'
import { getPriceTag } from '../../Utils/price'
import UnitsCoutControl from './UnitsCoutControl'

function CartItem({ cartItem }) {
  const { product, unitsCount } = cartItem

  return (
    <>
      <Link to={`/product/${product.id}`}>{product.name}</Link>
      <UnitsCoutControl val={unitsCount} productId={product.id} />
      <div>{getPriceTag(cartItem.product.price * cartItem.unitsCount)}</div>
    </>
  )
}

export default CartItem
