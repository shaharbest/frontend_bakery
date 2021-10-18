import React from 'react'
import ProductCartPanel from './ProductCartPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import { getCurrencySymbol } from '../../../DataBaseAccess'
import YesNo from '../../Utils/YesNo'
import { useProduct } from '../../../contexts/ProductContext'
import { useAuth } from '../../../contexts/AuthContext'

const arr = [
  'delivery charge',
  '20$',
  'delivery time',
  'two decades',
  'deliver to your city',
  <YesNo val={true} />,
]

function ProductDetails() {
  const { isAuthenticated } = useAuth()
  const product = useProduct()

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div>
        <CategoriesDiv product={product} />
        <StarsRatingIcon grade={product.stars} />
        <div>{`price: ${product.price}${getCurrencySymbol()}`}</div>
      </div>
      <div className="inline-grid gap-1 justify-items-stretch grid-cols-2">
        {arr.map((element, index) => (
          <div key={index} className="border">
            {element}
          </div>
        ))}
      </div>
      <ProductCartPanel />
      {isAuthenticated() && (
        <button className="btn">
          add to favourites <FontAwesomeIcon icon={['fas', 'star']} />
        </button>
      )}
    </div>
  )
}

function CategoriesDiv({ product }) {
  const content =
    product && product.categories
      ? product.categories.map((curCategory) => curCategory.name).join(' ')
      : ''

  return <div>{content}</div>
}

export default ProductDetails
