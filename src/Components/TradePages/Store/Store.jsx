import React from 'react'
import { getDataFilteredAndSorted } from './storeUtils'
import { useEffect, useState } from 'react'
import {
  getGroups,
  getSelectAllOption,
  getAllCategories,
  getSortCategoryOptions,
} from '../../../DataBaseAccess'
import { withRouter } from 'react-router-dom'
import Catalog from './Catalog'
import CatalogControls from './CatalogControls'
import CatalogSortControl from './CatalogSortControl'
import axios from 'axios'

const allOption = getSelectAllOption(),
  categoriesOptions = [allOption, ...getAllCategories()],
  isInStockOptions = [allOption, 'true', 'false'],
  sortCategoryOptions = getSortCategoryOptions()

function Store({ location }) {
  const [allProducts, setAllProducts] = useState([])
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

  useEffect(() => {
    const fetchAllProducts = async () => {
      const { data } = await axios.get('/products')
      console.log(data)
      setAllProducts(data)
    }
    fetchAllProducts()
  }, [])

  useEffect(() => {
    setFilteredAndSortedProducts(
      getDataFilteredAndSorted(
        allProducts,
        isInStock,
        category,
        search,
        isSortAscending,
        sortCategory,
        groups
      )
    )
  }, [
    allProducts,
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

  return (
    <div className="flex flex-col md:flex-row  h-full ">
      <div className="md:h-full flex flex-col md:mx-1 px-1">
        <CatalogControls
          updateIsInStock={updateIsInStock}
          updateCategory={updateCategory}
          is_in_stocks={isInStock}
          category={category}
          categoriesOptions={categoriesOptions}
          isInStockOptions={isInStockOptions}
          updateGroupCheck={updateGroupCheck}
        />
      </div>

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
