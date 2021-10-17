import React from 'react'
import { getGroups } from '../../../DataBaseAccess'
import GroupProducts from './GroupProducts'

function AllGroupsProducts({ goToStoreFiltered }) {
  return (
    <div className="bg-d4">
      {getGroups().map((curGroup, groupIndex) => {
        return (
          <GroupProducts
            key={groupIndex}
            group={curGroup}
            goToStoreFiltered={() => goToStoreFiltered(groupIndex)}
          />
        )
      })}
    </div>
  )
}

export default AllGroupsProducts
