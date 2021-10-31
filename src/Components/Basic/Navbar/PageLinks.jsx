import React from 'react'
import { Link } from 'react-router-dom'

function PageLink({ label, to }) {
  return (
    <li>
      <Link
        className="flex flex-col justify-center h-full text-center hover:bg-l3 hover:text-d2 md:w-16"
        to={to}
      >
        {label}
      </Link>
    </li>
  )
}

export default PageLink
