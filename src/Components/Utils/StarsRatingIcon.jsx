import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getStarsMax } from '../../DataBaseAccess'
import PropTypes from 'prop-types'

export default function StarsRatingIcon({ grade }) {
  return <span> {getArrayStars(grade)} </span>
}

function getArrayStars(num) {
  const arr = []
  let i

  for (i = 0; i < num; i++)
    arr.push(
      <span key={i}>
        <FontAwesomeIcon icon={['fas', 'star']} />
      </span>
    )
  for (; i < getStarsMax(); i++)
    arr.push(
      <span key={i}>
        <FontAwesomeIcon icon={['far', 'star']} />
      </span>
    )

  return arr
}

StarsRatingIcon.propTypes = { grade: PropTypes.number }
StarsRatingIcon.defaultProps = { grade: 0 }
