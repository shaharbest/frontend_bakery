import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

function Catalog({ productsList }) {
  return (
    <div className="flex flex-wrap justify-center">
      {productsList.map((curProduct, index) => (
        <div key={index} className="m-1 border">
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
