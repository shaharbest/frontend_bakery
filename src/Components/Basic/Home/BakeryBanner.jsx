import React from 'react'
import './animation.css'

function BakeryBanner() {
  return (
    <div className="overflow-hidden relative">
      <div className="banner z-10 relative text-white">
        <h1 className="top_banner text-white text-8xl mb-12">
          Shahar's Bakery
        </h1>
        <button
          className="m-1 text-4xl bottom_banner block mx-auto btn p-6"
          onClick={() => console.log('TODO')}
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
