import React from 'react'
import { getNoPicPath } from '../../../DataBaseAccess'
import Skeleton from 'react-loading-skeleton'

const classes = 'mx-auto h-20'

function ProductImg({ image, isSkeleton = false }) {
  return isSkeleton ? (
    <Skeleton className={`${classes} w-44`} />
  ) : (
    <img
      className={classes}
      alt="product"
      src={image ? image : getNoPicPath()}
    />
  )
}

export default ProductImg
