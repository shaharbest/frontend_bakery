import React from 'react'
import PagesMenu from './PagesMenu'
import BrandLinkIcon from './BrandLinkIcon'

function NavLeftSide() {
  return (
    <div className="flex items-center ">
      <BrandLinkIcon />
      <div className="hidden md:flex h-full">
        <PagesMenu />
      </div>
    </div>
  )
}

export default NavLeftSide
