import React from 'react'
import ProductCard from '../../TradePages/Store/ProductCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Carousel from '../../Utils/Swiper/Carousel'

function GroupCarousel({ group }) {
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
      <Carousel>
        {group
          ? group.products.map(curProduct => (
              <ProductCard
                key={curProduct.id}
                product={curProduct}
                alt="product"
              />
            ))
          : [1, 2, 3, 4].map(number => {
              return <ProductCard key={number} alt="product skeleton" />
            })}
      </Carousel>
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
