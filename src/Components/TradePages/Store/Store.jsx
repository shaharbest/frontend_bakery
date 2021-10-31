import React from 'react'

import Catalog from './Catalog'
import CatalogControls from './CatalogControls'
import CatalogSortControl from './CatalogSortControl'

import { withRouter } from 'react-router-dom'
import { getDataFilteredAndSorted } from './storeUtils'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../redux/actions/productsActions'

import {
  getGroups,
  getSelectAllOption,
  getAllCategories,
  getSortCategoryOptions,
} from '../../../DataBaseAccess'

const allOption = getSelectAllOption(),
  categoriesOptions = [allOption, ...getAllCategories()],
  isInStockOptions = [allOption, 'true', 'false'],
  sortCategoryOptions = getSortCategoryOptions()

function Store({ location }) {
  const dispatch = useDispatch()

  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([])
  const [search, setSearch] = useState('')
  const [isInStock, setIsInStock] = useState(isInStockOptions[0])
  const [category, setCategory] = useState(categoriesOptions[0])
  const [sortCategory, setSortCategory] = useState(sortCategoryOptions[0])
  const [isSortAscending, setIsSortAscending] = useState(false)
  const [groups, setGroups] = useState(() => {
    const groups = {}
    for (let i = 0; i < getGroups().length; i++) groups[i] = false
    return groups
  })

  const { loading, error, products } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    setFilteredAndSortedProducts(
      getDataFilteredAndSorted(
        products,
        isInStock,
        category,
        search,
        isSortAscending,
        sortCategory,
        groups
      )
    )
  }, [
    products,
    isInStock,
    category,
    search,
    isSortAscending,
    sortCategory,
    groups,
  ])

  useEffect(() => {
    const q = new URLSearchParams(location.search).get('q')
    setSearch(q ? q.slice(1, -1) : '')
  }, [location.search])

  const updateIsInStock = (val) => {
    setIsInStock(val)
  }
  const updateCategory = (val) => {
    setCategory(val)
  }
  const updateSortCategory = (e) => {
    setSortCategory(e.target.value)
  }
  const toggleSortDir = () => {
    setIsSortAscending((isSortAscending) => !isSortAscending)
  }
  const updateGroupCheck = (groupIndex, isChecked) => {
    const newGroup = Object.assign({}, groups)
    newGroup[groupIndex] = isChecked
    setGroups(newGroup)
  }

  return loading ? (
    <h2>loading...</h2>
  ) : error ? (
    <h3>{error}</h3>
  ) : (
    <div className="flex flex-col md:flex-row  h-full ">
      <aside className="md:h-full flex flex-col md:mx-1 p-2">
        <CatalogControls
          updateIsInStock={updateIsInStock}
          updateCategory={updateCategory}
          is_in_stocks={isInStock}
          category={category}
          categoriesOptions={categoriesOptions}
          isInStockOptions={isInStockOptions}
          updateGroupCheck={updateGroupCheck}
        />
      </aside>

      <div className="w-full flex flex-col overflow-y-hidden">
        <div className="flex justify-center">
          <CatalogSortControl
            sortCategoryOptions={sortCategoryOptions}
            handleCategoryChange={updateSortCategory}
            sortDirToggle={toggleSortDir}
          />
        </div>
        <div className="overflow-y-auto">
          <Catalog productsList={filteredAndSortedProducts} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Store)
