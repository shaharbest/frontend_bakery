import React from 'react'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import YesNo from '../../Utils/YesNo'
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
      <ProductName name={name} />
      <Link to={`/product/${id}`}>
        <ProductImg image={mainImagePath} />
      </Link>
      <Price price={price} />
      <StarsRatingIcon grade={rated} />
      <CategoriesDiv categories={categories} />
      <IsInStock isInStock={isInStock} />
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

function ProductName({ name }) {
  return (
    <div className="h-20 flex items-center justify-center">
      <h3>{name}</h3>
    </div>
  )
}

function Price({ price }) {
  return <div>{`${getCurrencySymbol()} ${price}`}</div>
}

function CategoriesDiv({ categories }) {
  return (
    <div>{categories.map((curCategory) => curCategory.name).join(', ')}</div>
  )
}

function IsInStock({ isInStock }) {
  return (
    <div>
      in stock: <YesNo val={isInStock} />
    </div>
  )
}

export default ProductCard
