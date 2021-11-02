import React, { useEffect, useState, useRef } from 'react'
import { listProducts } from '../../../redux/actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products'
import Pagination from './Pagination'

function Store2() {
  const catalogDivRef = useRef()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(10)

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
  const paginate = (pageNumber) => {
    catalogDivRef.current.scrollTo(1, 1)
    setCurrentPage(pageNumber)
  }

  return (
    <div className="h-full">
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="flex flex-col items-center overflow-y-hidden h-full">
          <div
            ref={catalogDivRef}
            className="w-full flex justify-center overflow-y-auto"
          >
            <Products products={currentProducts} />
          </div>
          <div className="my-3">
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

export default Store2
