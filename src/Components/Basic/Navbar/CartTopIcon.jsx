import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CartTopIcon({ count }) {
  return (
    <Link to="/cart">
      <span
        className={`flex items-center space-x-1 cursor-pointer ${
          !!count && 'border border-dashed p-1'
        }`}
      >
        <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
        {!!count && (
          <div className="bg-red-600 rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </div>
        )}
      </span>
    </Link>
  )
}

export default CartTopIcon
