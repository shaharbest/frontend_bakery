import React from 'react'
import ProductFront from './ProductFront'
import ProductDetails from './ProductDetails'
import { Link, withRouter } from 'react-router-dom'
import { ProductProvider } from '../../../contexts/ProductContext'
import RelatedProducts from './RelatedProducts'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../../redux/actions/productDetailsActions'

function Product({ match }) {
  // const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  )

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <ProductProvider product={product}>
          <div className="block md:flex rounded overflow-hidden">
            <div className="w-full md:w-2/3 p-2 bg-l2 dark:bg-d2">
              <ProductFront />
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/3 p-2 space-y-1 bg-l3 dark:bg-d3">
              <ProductDetails />
            </div>
          </div>
          <RelatedProducts />
          <div className="text-center mb-3">
            <Link className="border py-2 px-4" to="/store">
              back to catalog
            </Link>
          </div>
        </ProductProvider>
      )}
    </>
  )
}

export default withRouter(Product)