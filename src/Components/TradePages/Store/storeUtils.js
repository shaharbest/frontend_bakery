import {
  getGroups,
  getSelectAllOption,
  getProduct,
} from '../../../DataBaseAccess'

function getDataFilteredAndSorted(
  allProducts,
  isInStock,
  category,
  search,
  isSortAscending,
  sortCategory,
  groups
) {
  const allOption = getSelectAllOption()
  let filteredData = isAtLeastOneGroupChecked(groups)
    ? getProductsInAllCheckedGroups(groups, allProducts)
    : allProducts

  if (isInStock !== allOption)
    filteredData = filteredData.filter(
      (curProduct) => curProduct.is_in_stocks === (isInStock === 'true')
    )

  if (category !== allOption)
    filteredData = filteredData.filter(
      (curProduct) => curProduct.category === category
    )

  filteredData.sort(
    (product1, product2) =>
      (isSortAscending ? 1 : -1) *
      (product2[sortCategory] > product1[sortCategory] ? 1 : -1)
  )

  return filteredData.filter((curProduct) =>
    curProduct.name.toLowerCase().includes(search.toLowerCase())
  )
}

function isAtLeastOneGroupChecked(groups) {
  return Object.values(groups).includes(true)
}

function getProductsInAllCheckedGroups(groups) {
  const checkedGroupsIndexes = Object.keys(groups).filter(
    (groupIndex) => groups[groupIndex]
  )
  const groupsOfProducts = checkedGroupsIndexes.map(
    (curGroupIndex) => getGroups()[curGroupIndex].productsId
  )
  const intersectionArray = groupsOfProducts.reduce(
    (filteredArray, curArray) => {
      return filteredArray.filter((value) => curArray.includes(value))
    }
  )
  return intersectionArray.map((curId) => getProduct(curId))
}

export { getDataFilteredAndSorted }
