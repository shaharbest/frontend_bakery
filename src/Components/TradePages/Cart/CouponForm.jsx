import React from 'react'
import { getAllCouponNumbers } from '../../../DataBaseAccess'
import { turnCouponOn } from '../../../redux/actions/couponActions'
import { useDispatch } from 'react-redux'

function CouponForm() {
  const dispatch = useDispatch()
  return (
    <div>
      <form
        className="flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          const codeInput = e.target.coupon_code.value
          if (isCouponCodeValid(codeInput)) dispatch(turnCouponOn())
          else alert('invalid code')
        }}
      >
        <input
          className="w-16 text-center"
          name="coupon_code"
          type="text"
          required
        />
        <button className="btn">insert</button>
      </form>
    </div>
  )
}

function isCouponCodeValid(code) {
  return getAllCouponNumbers().includes(code)
}

export default CouponForm
