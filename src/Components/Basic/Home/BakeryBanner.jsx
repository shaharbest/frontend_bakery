import React from 'react'
import './animation.css'
import { useHistory } from 'react-router-dom'

function BakeryBanner() {
  const history = useHistory()

  return (
    <div className="relative">
      <div className="banner z-10 relative flex flex-col items-center">
        <h1
          style={{
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          }}
          className="top_banner text-7xl md:text-8xl lg:text-9xl text-white"
        >
          Shahar's Bakery
        </h1>
        <button
          className="bottom_banner btn text-4xl my-5"
          onClick={() => history.push('/store2')}
        >
          store
        </button>
      </div>
      <div className="absolute inset-0">
        <img
          src="images/bakery_wallpaper.jpg"
          alt="banner"
          className="h-full sm:w-full object-cover"
        />
      </div>
    </div>
  )
}

export default BakeryBanner
