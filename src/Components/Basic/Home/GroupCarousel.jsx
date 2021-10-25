import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import ProductCard from '../../TradePages/Store/ProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GroupCarousel({ group }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-center py-2">
        <h1 className="text-left">{group.name}</h1>
        <button className="btn" onClick={() => console.log('TODO')}>
          see all
        </button>
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
          {group.products.map((curProduct) => (
            <div key={curProduct.id} className="border">
              <ProductCard product={curProduct} alt="product" />
            </div>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  )
}

export default GroupCarousel
