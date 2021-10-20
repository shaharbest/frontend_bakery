import React from 'react'

import AllGroupsProducts from './AllGroupsProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

function HomePage(props) {
  return (
    <div>
      <div className="flex justify-center space-x-9 mb-5 items-center">
        <h1 className="">Home Page</h1>
        <FontAwesomeIcon icon={['fas', 'home']} size="4x" />
      </div>

      <div className="relative">
        <div className="flex justify-center">
          <img src="images/bakery_wallpaper.jpg" alt="wallpaper" />
        </div>

        <div
          style={{ transform: 'translate(-50%, 0)' }}
          className="absolute bottom-5 left-1/2"
        >
          <ShopButton history={props.history} />
        </div>
      </div>

      <AllGroupsProducts />
    </div>
  )
}

function ShopButton({ history }) {
  return (
    <button onClick={() => history.push('/store')} className="btn space-x-2">
      <h1 className="inline">store</h1>
      <FontAwesomeIcon icon={['fas', 'store']} size="2x" />
    </button>
  )
}

export default withRouter(HomePage)
