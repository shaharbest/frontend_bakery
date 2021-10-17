import React from 'react'
import PageLink from './PageLinks'
import pagesLinks from '../../../config/pagesLinks'

function PagesMenu() {
  return (
    <ul className="flex flex-col md:flex-row gap-1 h-full">
      {pagesLinks.map((curLink) => (
        <PageLink
          key={curLink.to}
          to={`/${curLink.to}`}
          label={curLink.label}
        />
      ))}
    </ul>
  )
}

export default PagesMenu
