import React from 'react'
import { getProductPics, getNoPicPath } from '../../../DataBaseAccess'

function ProductImg({ productId, isCol }) {
  const picsObj = getProductPics(productId)
  const path =
    picsObj !== undefined &&
    picsObj.pic_path !== null &&
    picsObj.pic_path !== ''
      ? picsObj.pic_path
      : getNoPicPath()

  return <img className="mx-auto h-20" alt="product" src={path} />
}

export default ProductImg
