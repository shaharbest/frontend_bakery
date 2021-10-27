import React from 'react'
import CartSide from './CartSide'
import CartTable2 from './CartTable2'
import { useSelector } from 'react-redux'

function CartPage() {
  const cart = useSelector((state) => state.cart)
  const isCouponActive = useSelector((state) => state.coupon)
  const productListState = useSelector((state) => state.productList)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
      <div className="md:col-span-2 overflow-y-auto order-2 md:order-1">
        <CartTable2
          cart={cart}
          isCouponActive={isCouponActive}
          productListState={productListState}
        />
      </div>
      <div className="m-3 order-1 md:order-2">
        <CartSide
          cart={cart}
          isCouponActive={isCouponActive}
          productListState={productListState}
        />
      </div>
    </div>
  )
}

export default CartPage
