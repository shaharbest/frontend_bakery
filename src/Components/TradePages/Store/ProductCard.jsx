import React from 'react'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import { getCurrencySymbol } from '../../../DataBaseAccess'
import ProductImg from './ProductImg'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

function ProductCard({ product }) {
  return (
    <section
      className={'w-full md:w-auto text-center p-2 flex flex-col border'}
    >
      {product ? (
        <RealProductCard product={product} />
      ) : (
        <SkeletonProductCard />
      )}
    </section>
  )
}

function RealProductCard({ product }) {
  const { id, name, price, categories, rated, isInStock, mainImagePath } =
    product
  return (
    <>
      <h3 className="py-2">{name}</h3>
      <Link to={`/product/${id}`} className="hover:opacity-75">
        <ProductImg image={mainImagePath} />
      </Link>
      <h4>{categories.map((curCategory) => curCategory.name).join(', ')}</h4>
      <h4>{`${getCurrencySymbol()} ${price}`}</h4>
      <StarsRatingIcon grade={rated} />
      <div className="h-10">
        {!isInStock && (
          <img
            className="h-full mx-auto"
            src="/images/out_of_stock.png"
            alt="out of stock"
          />
        )}
      </div>
    </>
  )
}

function SkeletonProductCard() {
  return (
    <>
      <h2>
        <Skeleton className="w-32" />
      </h2>
      <ProductImg isSkeleton={true} />
      <Skeleton className="w-16" />
      <StarsRatingIcon grade={5} />
      <Skeleton className="w-28" />
      <Skeleton className="w-36" />
    </>
  )
}

export default ProductCard
