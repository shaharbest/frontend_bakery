import React from 'react'
import { useProduct } from '../../../contexts/ProductContext'
import ProductGallery from './ProductGallery'

function ProductFront() {
  const { name, mainImagePath, otherImages, description } = useProduct()

  const allPictures = [
    mainImagePath,
    ...otherImages.map((curPic) => curPic.path),
  ]

  return (
    <>
      <h1>{name}</h1>
      <ProductGallery images={allPictures} />
      <p className="text-center">{description}</p>
    </>
  )
}

export default ProductFront
