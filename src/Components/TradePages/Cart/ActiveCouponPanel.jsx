import React from 'react'
import { turnCouponOff } from '../../../redux/actions/couponActions'
import { useDispatch } from 'react-redux'

function ActiveCouponPanel() {
  const dispatch = useDispatch()

  return (
    <div>
      <button className="btn" onClick={() => dispatch(turnCouponOff())}>
        deactivate coupon
      </button>
    </div>
  )
}

export default ActiveCouponPanel
