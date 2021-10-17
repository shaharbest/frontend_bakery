import React from 'react'
import { getDomainMap } from '../../../DataBaseAccess'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMediaIcons() {
  return (
    <div className="flex justify-center space-x-2 md:justify-around self-center">
      {Object.values(getDomainMap()).map((curDomain, index) => (
        <a key={index} href={curDomain.path}>
          <FontAwesomeIcon
            className="text-l2"
            icon={['fab', curDomain.icon]}
            size="2x"
          />
        </a>
      ))}
    </div>
  )
}

export default SocialMediaIcons
