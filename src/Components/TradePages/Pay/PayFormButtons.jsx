import React from 'react'
import { withRouter } from 'react-router-dom'

function PayFormButtons({ isSubmitting, history }) {
  return (
    <div className="space-x-1 mt-1">
      <button className="btn" disabled={isSubmitting} type="submit">
        submit
      </button>
      <button className="btn" type="reset">
        reset
      </button>
      <button
        className="btn"
        type="reset"
        onClick={() => history.push('/cart')}
      >
        back to cart
      </button>
    </div>
  )
}

export default withRouter(PayFormButtons)
