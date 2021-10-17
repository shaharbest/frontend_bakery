import React from 'react'
import { resetCart } from '../../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

function CartResetButton() {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(resetCart())} className="btn w-28">
      reset
    </button>
  )
}

export default CartResetButton
