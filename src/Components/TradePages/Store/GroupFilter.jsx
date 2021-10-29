import React from 'react'

function GroupFilter({ groupName, updateGroupCheck, groupIndex }) {
  return (
    <div className="border flex justify-between items-baseline p-1">
      <h3 className="justify-self-center">{groupName}</h3>
      <input
        className="justify-self-center"
        type="checkbox"
        onChange={(e) => updateGroupCheck(groupIndex, e.target.checked)}
      />
    </div>
  )
}

export default GroupFilter
