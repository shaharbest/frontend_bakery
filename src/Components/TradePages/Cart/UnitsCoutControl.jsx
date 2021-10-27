import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import {
  removeProductFromCart,
  assignProductUnitsCount,
} from '../../../redux/actions/cartActions'

function UnitsCoutControl({ val, productId }) {
  const dispatch = useDispatch()
  const [count, setCount] = useState(val)

  return (
    <div className="flex gap-2 h-11">
      <input
        required
        minLength="1"
        onChange={(e) => {
          setCount(parseInt(e.target.value))
          const count = console.log('count:', e.target.value)
          dispatch(assignProductUnitsCount(productId, parseInt(e.target.value)))
        }}
        value={count}
        type="number"
        className="w-16 text-center"
        min={1}
      />
      <button
        className="btn"
        onClick={() => dispatch(removeProductFromCart(productId))}
      >
        <FontAwesomeIcon icon={['far', 'trash-alt']} />
      </button>
    </div>
  )
}

export default UnitsCoutControl
