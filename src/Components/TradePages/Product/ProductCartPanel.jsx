import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import YesNo from '../../Utils/YesNo'
import { useProduct } from '../../../contexts/ProductContext'
import { addProductsUnitsToCart } from '../../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

function ProductCartPanel() {
  const dispatch = useDispatch()
  const product = useProduct()
  const [productUnitsCount, setproductUnitsCount] = useState(1)

  return (
    <div className="inline-block p-1 border">
      {product.isInStock ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(
              addProductsUnitsToCart(product.id, parseInt(productUnitsCount))
            )
          }}
        >
          <button className="m-1 btn">
            add to cart <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
          </button>
          <input
            className="m-1 text-center"
            type="number"
            placeholder="units"
            style={{ width: '70px' }}
            name="count"
            required
            min={1}
            value={productUnitsCount}
            onChange={(e) => setproductUnitsCount(e.target.value)}
          ></input>
        </form>
      ) : (
        <>
          <YesNo val={product.isInStock} />
          <span>out of stock</span>
        </>
      )}
    </div>
  )
}

export default ProductCartPanel
