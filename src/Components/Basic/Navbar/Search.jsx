import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search({ history }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const val = e.target.searched_string.value
        history.push(`/store?q="${val}"`)
      }}
    >
      <div className="flex gap-1 overflow-hidden rounded items-center h-8">
        <button className="btn flex h-full">
          <FontAwesomeIcon icon={['fas', 'search']} />
        </button>
        <input
          name="searched_string"
          className="px-2 w-24 h-full ounded-r-lg focus:ounded-r-lg"
          type="text"
        />
      </div>
    </form>
  )
}

export default withRouter(Search)
