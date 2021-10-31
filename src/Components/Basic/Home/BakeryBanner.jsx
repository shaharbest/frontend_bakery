import React from 'react'
import './animation.css'
import { useHistory } from 'react-router-dom'

function BakeryBanner() {
  const history = useHistory()
  return (
    <div className="overflow-hidden relative">
      <div className="banner z-10 relative ">
        <h1 className="top_banner text-8xl mb-12">Shahar's Bakery</h1>
        <button
          className="m-1 btn text-4xl bottom_banner block mx-auto p-6"
          onClick={() => history.push('/store2')}
        >
          store
        </button>
      </div>
      <div className="absolute inset-0 object-cover">
        <img
          src="images/bakery_wallpaper.jpg"
          alt="banner"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default BakeryBanner
