import React from 'react'
import { withRouter } from 'react-router-dom'
import CartTable from './CartTable'
import {
  getMaamPercent,
  getCouponDiscountPercent,
  getProduct,
} from '../../../DataBaseAccess'
import CouponForm from './CouponForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, shallowEqual } from 'react-redux'
import CartResetButton from './CartResetButton'
import ActiveCouponPanel from './ActiveCouponPanel'

function CartPage({ history }) {
  const cart = useSelector((state) => state.cart, shallowEqual)
  const isCouponActive = useSelector((state) => state.coupon)
  const cartItems = getCartItemsFromStore(cart)
  const productsCount = getCountProducts(cart)

  return (
    <div>
      <div className="flex justify-around">
        <div>
          <CartTable cartItems={cartItems} />
          {productsCount > 0 && (
            <div className="flex justify-center gap-1">
              <CartResetButton />
              <button onClick={() => history.push('/pay')} className="btn w-28">
                pay
              </button>
            </div>
          )}
        </div>
        <div className="p-1">
          <div className="flex flex-col items-center h-full justify-center gap-1">
            <div>maam: {getMaamPercent()}%</div>
            {isCouponActive && (
              <div>coupon discount: {getCouponDiscountPercent()}%</div>
            )}
            <div>{isCouponActive ? <ActiveCouponPanel /> : <CouponForm />}</div>
            <FontAwesomeIcon size="7x" icon={['fas', 'shopping-cart']} />
          </div>
        </div>
      </div>
    </div>
  )
}

function getCountProducts(cart) {
  return Object.keys(cart).length
}

function getCartItemsFromStore(cart) {
  const cartItems = {}

  for (const [productId, unitsCount] of Object.entries(cart)) {
    cartItems[productId] = {
      product: getProduct(Number(productId)),
      unitsCount: unitsCount,
    }
  }

  return cartItems
}

export default withRouter(CartPage)
