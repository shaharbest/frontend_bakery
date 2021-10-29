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
      <div className="flex gap-1 overflow-hidden rounded items-center h-10">
        <button className="h-full bg-d4 px-2">
          <FontAwesomeIcon className="p-1" size="2x" icon={['fas', 'search']} />
        </button>
        <input
          name="searched_string"
          className="px-2 w-32 border h-full"
          type="text"
        />
      </div>
    </form>
  )
}

export default withRouter(Search)
