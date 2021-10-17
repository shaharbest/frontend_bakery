import React from 'react'
import { Link } from 'react-router-dom'

function PageLink({ label, to }) {
  return (
    <li>
      <Link
        className="flex px-3 flex-col justify-center h-full text-center hover:bg-gray-600"
        to={to}
      >
        {label}
      </Link>
    </li>
  )
}

export default PageLink
