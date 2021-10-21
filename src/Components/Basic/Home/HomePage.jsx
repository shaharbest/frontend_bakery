import React from 'react'

import AllGroupsProducts from './AllGroupsProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
  return (
    <div>
      <BakeryBanner />
      <AllGroupsProducts />
    </div>
  )
}

function BakeryBanner() {
  return (
    <div className="relative py-10 h-1/5">
      <div className="h-80 z-20 relative text-white flex flex-col items-center justify-between">
        <h1 className="text-white text-9xl">Shahar's Bakery</h1>
        <ShopButton />
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

function ShopButton() {
  return (
    <button onClick={() => console.log('TODO')} className="btn space-x-2">
      <h1 className="inline">store</h1>
      <FontAwesomeIcon icon={['fas', 'store']} size="2x" />
    </button>
  )
}

export default HomePage
