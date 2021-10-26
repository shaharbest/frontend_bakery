import React from 'react'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import YesNo from '../../Utils/YesNo'
import { getCurrencySymbol } from '../../../DataBaseAccess'
import ProductImg from './ProductImg'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const containerClasses =
  'w-full md:w-auto border-l1 text-center p-2 flex flex-col'

function ProductCard({ product }) {
  if (product) {
    const { id, name, price, categories, rated, isInStock, mainImagePath } =
      product

    return (
      <div className={containerClasses}>
        <ProductName name={name} />
        <Link to={`/product/${id}`}>
          <ProductImg image={mainImagePath} />
        </Link>
        <Price price={price} />
        <StarsRatingIcon grade={rated} />
        <CategoriesDiv categories={categories} />
        <IsInStock isInStock={isInStock} />
      </div>
    )
  } else {
    return (
      <div className={containerClasses}>
        <h2>
          <Skeleton className="w-32" />
        </h2>
        <ProductImg isSkeleton={true} />
        <Skeleton className="w-16" />
        <StarsRatingIcon grade={5} />
        <Skeleton className="w-28" />
        <Skeleton className="w-36" />
      </div>
    )
  }
}

function ProductName({ name }) {
  return <h2 className="p-2">{name}</h2>
}

function Price({ price }) {
  return <div>{`${price}${getCurrencySymbol()}`}</div>
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
