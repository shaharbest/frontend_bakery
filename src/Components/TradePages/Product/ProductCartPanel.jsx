import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useProduct } from '../../../contexts/ProductContext'
import { addProductsUnitsToCart } from '../../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

function ProductCartPanel() {
  const dispatch = useDispatch()
  const product = useProduct()
  const [productUnitsCount, setproductUnitsCount] = useState(1)

  return (
    <div className="inline-block p-1">
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
        <img
          className="w-28 mx-auto"
          src="/images/out_of_stock.png"
          alt="out of stock"
        />
      )}
    </div>
  )
}

export default ProductCartPanel
