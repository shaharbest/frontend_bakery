import React from 'react'

function CatalogSelect({ labelContent, options, clickHandle, chosen }) {
  return (
    <div className="my-1">
      {labelContent && (
        <h3 className="text-center inline-block md:w-full">{labelContent}</h3>
      )}
      <div className="flex flex-wrap justify-center">
        {options.map((curOption) => (
          <button
            key={curOption}
            onClick={() => clickHandle(curOption)}
            className={`m-1 border w-24 py-2 px-4${
              curOption === chosen && ' chosen'
            }`}
          >
            {curOption}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CatalogSelect
