import React from 'react'
import { withRouter } from 'react-router-dom'
import { listProducts } from '../../../redux/actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Products from './Products'
import Pagination from './Pagination'

function Store2() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(6)

  const { loading, error, products } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1>store2</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="flex flex-col items-center">
          <div className="">
            <Products products={currentProducts} />
          </div>
          <div className="">
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(Store2)
