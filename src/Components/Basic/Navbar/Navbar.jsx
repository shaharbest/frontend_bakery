import React from 'react'
import { useState } from 'react'
import CartTopIcon from './CartTopIcon'
import Search from './Search'
import Burger from './Burger'
import PagesMenu from './PagesMenu'
import NavLeftSide from './NavLeftSide'
import LogSquare from './LogSquare'
import { useSelector } from 'react-redux'

function Navbar() {
  const cart = useSelector((state) => state.cart)
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive((active) => {
      setActive(!active)
    })
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-5">
        <NavLeftSide />
        <div className="flex gap-3 items-center">
          <Search />
          <LogSquare />
          <CartTopIcon count={Object.keys(cart).length} />
          <Burger toggleActive={toggleActive} />
        </div>
      </div>
      <div>
        <div className={`border-t-2 md:hidden ${!active && 'hidden'}`}>
          <PagesMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
