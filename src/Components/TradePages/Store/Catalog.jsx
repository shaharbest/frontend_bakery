import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

function Catalog({ productsList }) {
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {productsList.map((curProduct, index) => (
        <div key={index}>
          <ProductCard product={curProduct} isCol={true} />
        </div>
      ))}
    </div>
  )
}

Catalog.propTypes = {
  productsList: PropTypes.array,
}

Catalog.defaultProps = {
  productsList: [],
}

export default Catalog
