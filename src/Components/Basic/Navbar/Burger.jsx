import React from 'react'

function Burger({ toggleActive }) {
  return (
    <div
      className="md:hidden cursor-pointer flex flex-col justify-around h-14 py-3 w-8"
      onClick={toggleActive}
    >
      <SingleBar />
      <SingleBar />
      <SingleBar />
    </div>
  )
}

function SingleBar() {
  return <span className="bg-white h-1 w-full"></span>
}

export default Burger
