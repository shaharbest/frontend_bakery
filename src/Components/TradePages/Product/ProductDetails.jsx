import React from 'react'
import ProductCartPanel from './ProductCartPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import { getPriceTag } from '../../Utils/price'
import YesNo from '../../Utils/YesNo'
import { useProduct } from '../../../contexts/ProductContext'
import { useSelector } from 'react-redux'

const arr = [
  'delivery charge',
  getPriceTag(20),
  'delivery time',
  'two decades',
  'deliver to your city',
  <YesNo val={true} />,
]

function ProductDetails() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const product = useProduct()

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div>
        <CategoriesDiv product={product} />
        <div>{`price: ${getPriceTag(product.price)}`}</div>
        <StarsRatingIcon grade={product.rated} />
      </div>
      <div className="text-left inline-grid gap-1 justify-items-stretch grid-cols-2">
        {arr.map((element, index) => (
          <div key={index} className="border p-1">
            {element}
          </div>
        ))}
      </div>
      <ProductCartPanel />
      {userInfo && (
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
      ? product.categories.map(curCategory => curCategory.name).join(', ')
      : ''

  return <div>{content}</div>
}

export default ProductDetails
