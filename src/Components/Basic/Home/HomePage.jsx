import React from 'react'
import './animation.css'

import AllGroupsProducts from './AllGroupsProducts'

function HomePage() {
  return (
    <main>
      <BakeryBanner />
      <div className="relative">
        <AllGroupsProducts />
      </div>
    </main>
  )
}

function BakeryBanner() {
  return (
    <div className="overflow-hidden relative py-10 h-96">
      <div className="banner z-20 relative text-white">
        <h1 className="top_banner text-white text-9xl">Shahar's Bakery</h1>
        <button
          className="text-4xl bottom_banner mt-20 block mx-auto btn"
          onClick={() => console.log('TODO')}
        >
          store
        </button>
      </div>
      <div className="absolute inset-0 h-auto z-10">
        <img src="images/bakery_wallpaper.jpg" alt="banner" />
      </div>
    </div>
  )
}

export default HomePage
