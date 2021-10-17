import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const vxMap = {
  true: {
    icon: 'check',
    color: 'text-green-700',
  },
  false: {
    icon: 'times',
    color: 'text-red-700',
  },
}

function YesNo({ val }) {
  const details = vxMap[val]

  return (
    <span>
      <FontAwesomeIcon className={details.color} icon={['fas', details.icon]} />
    </span>
  )
}

YesNo.propTypes = {
  val: PropTypes.bool,
}

YesNo.defaultProps = {
  val: false,
}

export default YesNo
