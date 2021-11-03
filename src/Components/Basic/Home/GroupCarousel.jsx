import React, { useState, useEffect } from 'react'
import ItemsCarousel from 'react-items-carousel'
import ProductCard from '../../TradePages/Store/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function GroupCarousel({ group }) {
  const [width, setWindowWidth] = useState(0)
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  const updateDimensions = () => {
    setWindowWidth(window.innerWidth)
  }

  const [activeItemIndex, setActiveItemIndex] = useState(0)
  return (
    <div className="py-2 w-full">
      <div className="flex flex-col sm:flex-row items-center p-2 gap-2 justify-around">
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
      <div className="px-10">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={getCarouselCount(width)}
          gutter={20}
          leftChevron={
            <FontAwesomeIcon size="3x" icon={['fas', 'angle-left']} />
          }
          rightChevron={
            <FontAwesomeIcon size="3x" icon={['fas', 'angle-right']} />
          }
          outsideChevron
          chevronWidth={40}
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

function getCarouselCount(width) {
  const breakingPoints = [700, 1000]
  const countItems = [1, 2, 3]
  if (width < breakingPoints[0]) return countItems[0]
  if (width < breakingPoints[1]) return countItems[1]
  return countItems[2]
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
