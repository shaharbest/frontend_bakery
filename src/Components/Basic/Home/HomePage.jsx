import React from 'react'
import './animation.css'

import AllGroupsProducts from './AllGroupsProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          className="bottom_banner mt-20 block mx-auto btn space-x-2"
          onClick={() => console.log('TODO')}
        >
          <h1 className="inline">store</h1>
          <FontAwesomeIcon icon={['fas', 'store']} size="2x" />
        </button>
      </div>
      <div className="absolute inset-0 h-auto z-10">
        <img
          src="images/bakery_wallpaper.jpg"
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default HomePage
