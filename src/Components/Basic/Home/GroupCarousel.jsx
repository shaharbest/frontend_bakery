import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import ProductCard from '../../TradePages/Store/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function GroupCarousel({ group }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-center py-2">
        {group ? (
          <>
            <h2 className="text-left">{group.name}</h2>
            <button className="btn" onClick={() => console.log('TODO')}>
              see all
            </button>
          </>
        ) : (
          <>
            <UpperSkeleton />
            <UpperSkeleton />
          </>
        )}
      </div>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={
            <FontAwesomeIcon inverse size="3x" icon={['fas', 'angle-left']} />
          }
          rightChevron={
            <FontAwesomeIcon size="3x" icon={['fas', 'angle-right']} />
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {group
            ? group.products.map((curProduct) => (
                <div key={curProduct.id} className="border">
                  <ProductCard product={curProduct} alt="product" />
                </div>
              ))
            : [1, 2, 3].map((curSkeleton, index) => {
                return (
                  <div key={index} className="border">
                    <ProductCard alt="product skeleton" />
                  </div>
                )
              })}
        </ItemsCarousel>
      </div>
    </div>
  )
}

function UpperSkeleton() {
  return (
    <Skeleton
      style={{
        border: '1px solid #ccc',
        display: 'block',
        lineHeight: 1,
        width: 70,
        margin: 0,
        padding: 0,
      }}
    />
  )
}

export default GroupCarousel
