import React from 'react'
import { getGroups } from '../../../DataBaseAccess'

function CatalogControls({
  updateIsInStock,
  updateCategory,
  is_in_stocks,
  category,
  categoriesOptions,
  isInStockOptions,
  updateGroupCheck,
}) {
  return (
    <div>
      <div className="text-center flex justify-around">
        <CatalogSelect
          labelContent="is in stock"
          options={isInStockOptions}
          clickHandle={updateIsInStock}
          chosen={is_in_stocks}
        />
        <CatalogSelect
          labelContent="category"
          options={categoriesOptions}
          clickHandle={updateCategory}
          chosen={category}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
        {getGroups().map((curGroup, groupIndex) => (
          <GroupFilter
            key={groupIndex}
            groupIndex={groupIndex}
            groupName={curGroup.name}
            updateGroupCheck={updateGroupCheck}
          />
        ))}
      </div>
    </div>
  )
}

function GroupFilter({ groupName, updateGroupCheck, groupIndex }) {
  return (
    <div className="bg-d2 border flex justify-between items-baseline p-1">
      <h2 className="justify-self-center">{groupName}</h2>
      <input
        className="justify-self-center"
        type="checkbox"
        onChange={(e) => updateGroupCheck(groupIndex, e.target.checked)}
      />
    </div>
  )
}

function CatalogSelect({ labelContent, options, clickHandle, chosen }) {
  return (
    <div className="my-1">
      {labelContent && (
        <h2 className="text-center inline-block md:w-full">{labelContent}</h2>
      )}
      <div className="flex flex-wrap justify-center">
        {options.map((curOption) => (
          <button
            key={curOption}
            onClick={() => clickHandle(curOption)}
            className={`m-1 border w-24 py-2 px-4 ${
              curOption === chosen ? 'bg-d4' : 'bg-d2'
            }`}
          >
            {curOption}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CatalogControls
