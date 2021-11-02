import React from 'react'
import { getNoPicPath } from '../../../DataBaseAccess'
import Skeleton from 'react-loading-skeleton'

function ProductImg({ image, isSkeleton = false }) {
  return (
    <div className="mx-auto h-32">
      <ImageElement image={image} isSkeleton={isSkeleton} />
    </div>
  )
}

function ImageElement({ image, isSkeleton }) {
  return isSkeleton ? (
    <Skeleton className="w-44" />
  ) : (
    <img
      className="h-full mx-auto"
      alt="product"
      src={image ? image : getNoPicPath()}
    />
  )
}

export default ProductImg
