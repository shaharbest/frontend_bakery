import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartResetButton from './CartResetButton'
import { getPriceTag } from '../../Utils/price'

function CartSide({ isCouponActive, cart, productListState }) {
  const { loading, error, products } = productListState

  return (
    <div className="flex flex-col items-center h-full justify-center gap-3">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon size="7x" icon={['fas', 'shopping-cart']} />
        {products && products.length > 0 && (
          <TotalDiv cart={cart} products={products} />
        )}
      </div>
      {cart.length > 0 && <CartButtonsDiv />}
    </div>
  )
}

function TotalDiv({ cart, products }) {
  return (
    <div className="text-3xl">
      <span>total: </span>
      {getPriceTag(getTotal(cart, products))}
    </div>
  )
}

function getTotal(cart, products) {
  return cart.reduce((sum, [productId, countItems]) => {
    return (sum +=
      products.find((curProduct) => curProduct.id === productId).price *
      countItems)
  }, 0)
}

function CartButtonsDiv() {
  const history = useHistory()
  return (
    <div className="flex justify-center gap-1">
      <CartResetButton />
      <button onClick={() => history.push('/pay')} className="btn w-28">
        pay
      </button>
    </div>
  )
}

export default CartSide
