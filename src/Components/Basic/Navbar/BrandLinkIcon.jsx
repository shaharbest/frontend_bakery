import React from 'react'
import { Link } from 'react-router-dom'

function BrandLinkIcon() {
  return (
    <Link to="/">
      <img src="images/shahar_logo.png" className="w-20" alt="shahar logo" />
    </Link>
  )
}

export default BrandLinkIcon
