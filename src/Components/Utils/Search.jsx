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
      <div className="flex overflow-hidden rounded items-center h-10 w-60">
        <button className="h-full  w-1/4 bg-d4">
          <FontAwesomeIcon className="p-1" size="2x" icon={['fas', 'search']} />
        </button>
        <input
          name="searched_string"
          className="px-2 w-3/4 border h-full"
          type="text"
        />
      </div>
    </form>
  )
}

export default withRouter(Search)
