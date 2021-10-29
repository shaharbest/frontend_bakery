import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function CatalogSortControl({
  sortDirToggle,
  handleCategoryChange,
  sortCategoryOptions,
}) {
  return (
    <div className="m-1">
      <button className="btn w-20 m-1" onClick={sortDirToggle}>
        <FontAwesomeIcon icon={['fas', 'arrows-alt-v']} />
      </button>

      <select className="w-auto" onChange={handleCategoryChange}>
        {sortCategoryOptions.map((curOption) => (
          <option key={curOption} value={curOption}>
            {curOption}
          </option>
        ))}
      </select>
    </div>
  )
}

CatalogSortControl.propTypes = {
  sortDirToggle: PropTypes.func,
  handleCategoryChange: PropTypes.func,
  sortCategoryOptions: PropTypes.array,
}

CatalogSortControl.defaultProps = {
  sortCategoryOptions: [],
}

export default CatalogSortControl
