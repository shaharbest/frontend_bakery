import React from 'react'
import CatalogSelect from './CatalogSelect'
import GroupFilter from './GroupFilter'
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
    <aside>
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
    </aside>
  )
}

export default CatalogControls
