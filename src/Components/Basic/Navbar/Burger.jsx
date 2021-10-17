import React from 'react'

function Burger({ toggleActive }) {
  return (
    <div
      className="md:hidden cursor-pointer flex flex-col justify-around h-12 py-3 w-9"
      onClick={toggleActive}
    >
      <SingleBar />
      <SingleBar />
      <SingleBar />
    </div>
  )
}

function SingleBar() {
  return <span className="bg-white h-1 w-full rounded-lg"></span>
}

export default Burger
