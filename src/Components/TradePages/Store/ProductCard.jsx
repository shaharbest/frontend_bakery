import React from 'react'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import YesNo from '../../Utils/YesNo'
import { getCurrencySymbol } from '../../../DataBaseAccess'
import ProductImg from './ProductImg'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const { id, name, price, category, rated, isInStock } = product

  return (
    <div className="w-full md:w-auto border-l1 text-center">
      <h2 className="p-2">{name}</h2>
      <div>
        <Link to={`/product/${id}`}>
          <ProductImg productId={id} isCol={true} />
        </Link>
      </div>
      <div>{`${price}${getCurrencySymbol()}`}</div>
      <div>
        <StarsRatingIcon grade={rated} />
      </div>
      <div>{category}</div>
      <div>
        in stock: <YesNo val={isInStock} />
      </div>
    </div>
  )
}

export default ProductCard
