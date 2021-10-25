import React from 'react'
import { useProduct } from '../../../contexts/ProductContext'
import ProductGallery from './ProductGallery'

function ProductFront() {
  const product = useProduct()
  const allPictures = [
    product.mainImagePath,
    ...product.otherImages.map((curPic) => curPic.path),
  ]

  return (
    <>
      <h1 className="md:text-left">{product.name}</h1>
      <ProductGallery images={allPictures} />
      <p className="text-center">{product.description}</p>
    </>
  )
}

export default ProductFront
