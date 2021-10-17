import React, { useContext } from 'react'

const ProductContext = React.createContext()

function useProduct() {
  return useContext(ProductContext)
}

const productPlaceHolder = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  categoryId: 1,
  stars: 5,
  related_products: ['bread1', 'bread2', 'bread3'],
  is_in_stocks: false,
}

function ProductProvider({ product, children }) {
  return (
    <ProductContext.Provider value={product ? product : productPlaceHolder}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, useProduct }
