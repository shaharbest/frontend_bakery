import React from 'react'
import { useProduct } from '../../../contexts/ProductContext'
import { useEffect, useState } from 'react'
import Carousel from '../../Utils/Carousel/Carousel'

function ProductFront() {
  const product = useProduct()

  const productPics = product.otherImages
  const [mainPic, setMainPic] = useState(() => product.mainImagePath)

  useEffect(() => {
    setMainPic(product.mainImagePath)
  }, [product])

  const allPics = [product.mainImagePath, ...productPics]

  return (
    <>
      <h1 className="md:text-left">{product.name}</h1>
      <div>
        <img className="mx-auto max-h-96 p-1" src={mainPic} alt="loaf pic" />
        <div className="w-96 mx-auto">
          <Carousel show={3}>
            {allPics.map((curPicPath, index) => (
              <span key={index} className="flex flex-col justify-center">
                <img
                  className="w-full mx-auto p-1"
                  src={curPicPath}
                  alt={curPicPath}
                  onClick={() => setMainPic(allPics[index])}
                />
              </span>
            ))}
          </Carousel>
        </div>
      </div>
      <p className="text-center">{product.description}</p>
    </>
  )
}

export default ProductFront
