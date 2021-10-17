import React from 'react'
import CartItem from './CartItem'
import {
  getMaamPercent,
  getCouponDiscountPercent,
} from '../../../DataBaseAccess'
import { getPriceTag } from '../../Utils/price'
import { useSelector } from 'react-redux'

const titles = ['item', 'count', 'price']

function CartTable({ cartItems }) {
  const isCouponActive = useSelector((state) => state.coupon)
  const totalPrice = getTotalPrice(cartItems)
  const bottomStuff = [
    'total',
    '',
    getPriceTag(totalPrice),
    'maam',
    '',
    getPriceTag(floorTwoDigits(getSumPlusMaam(totalPrice))),
  ]

  if (isCouponActive) {
    bottomStuff.push(
      'coupon',
      '',
      getPriceTag(
        floorTwoDigits(getSumAfterCouponDiscount(getSumPlusMaam(totalPrice)))
      )
    )
  }

  return (
    <div className="text-2xl">
      <div className="bg-d2 m-1 p-3 grid grid-cols-3 justify-items-center mx-auto items-center gap-1 max-w-2xl">
        {titles.map((curTitle) => (
          <div key={curTitle} className="text-5xl">
            {curTitle}
          </div>
        ))}
        {[...Object.values(cartItems)].map((curCartItem) => (
          <CartItem key={curCartItem.product.id} cartItem={curCartItem} />
        ))}
        {bottomStuff.map((curTitle, index) => (
          <div key={index} className="text-4xl">
            {curTitle}
          </div>
        ))}
      </div>
      <div className="text-center"></div>
    </div>
  )
}

function getSumPlusMaam(sum) {
  return sum * ((100 + getMaamPercent()) / 100)
}

function floorTwoDigits(val) {
  return Math.floor(val * 100) / 100
}

function getSumAfterCouponDiscount(sum) {
  return sum * ((100 - getCouponDiscountPercent()) / 100)
}

function getTotalPrice(cartItems) {
  return [...Object.values(cartItems)].reduce((sum, curCartItem) => {
    return sum + curCartItem.product.price * curCartItem.unitsCount
  }, 0)
}

export default CartTable
