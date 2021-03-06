import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDomainMap } from '../../DataBaseAccess'

function Footer() {
  return (
    <footer className="text-center border-t-2 py-1">
      <div className="space-x-1">
        {Object.values(getDomainMap()).map((curDomain, index) => (
          <a key={index} href={curDomain.path}>
            <FontAwesomeIcon icon={['fab', curDomain.icon]} />
          </a>
        ))}
      </div>
      <div>all rights reseved to Shahar's Corp &copy; </div>
    </footer>
  )
}

export default Footer
