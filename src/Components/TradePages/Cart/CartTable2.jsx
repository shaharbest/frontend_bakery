import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CartItem2 from './CartItem2'
import { listProducts } from '../../../redux/actions/productsActions'

function CartTable2({ isCouponActive, cart, productListState }) {
  const dispatch = useDispatch()

  const { loading, error, products } = productListState

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  if (isCouponActive) {
    console.log('coupon is active')
  }

  return (
    <div>
      {loading
        ? 'loading'
        : error
        ? 'error'
        : cart.map((curItem, index) => {
            const product = products.find(
              (curProduct) => curProduct.id === curItem[0]
            )
            return product ? (
              <CartItem2
                key={index}
                product={product}
                countItems={curItem[1]}
              />
            ) : (
              <div key={index}>network problem</div>
            )
          })}
    </div>
  )
}

export default CartTable2
