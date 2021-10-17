import React from 'react'
import { Link } from 'react-router-dom'
import { getPriceTag } from '../../Utils/price'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import {
  removeProductFromCart,
  assignProductUnitsCount,
} from '../../../redux/actions/cartActions'

function CartItem({ cartItem }) {
  const { product, unitsCount } = cartItem

  return (
    <>
      <Link to={`/product/${product.id}`}>{product.name}</Link>
      <UnitsCoutControl val={unitsCount} product={product} />
      <div>{getPriceTag(cartItem.product.price * cartItem.unitsCount)}</div>
    </>
  )
}

function UnitsCoutControl({ val, product }) {
  const dispatch = useDispatch()

  return (
    <div className="flex gap-2">
      <input
        onChange={(e) =>
          dispatch(assignProductUnitsCount(product.id, e.target.value))
        }
        value={val}
        type="number"
        className="w-16 text-center"
        min={1}
      />
      <button
        className="btn"
        onClick={() => dispatch(removeProductFromCart(product.id))}
      >
        <FontAwesomeIcon icon={['far', 'trash-alt']} />
      </button>
    </div>
  )
}

export default CartItem
