import React from 'react'
import StarsRatingIcon from '../../Utils/StarsRatingIcon'
import YesNo from '../../Utils/YesNo'
import { getCurrencySymbol } from '../../../DataBaseAccess'
import ProductImg from './ProductImg'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const containerClasses = 'w-full md:w-auto text-center p-2 flex flex-col border'

function ProductCard({ product }) {
  if (product) {
    const { id, name, price, categories, rated, isInStock, mainImagePath } =
      product

    return (
      <section className={containerClasses}>
        <ProductName name={name} />
        <Link to={`/product/${id}`}>
          <ProductImg image={mainImagePath} />
        </Link>
        <Price price={price} />
        <StarsRatingIcon grade={rated} />
        <CategoriesDiv categories={categories} />
        <IsInStock isInStock={isInStock} />
      </section>
    )
  } else {
    return (
      <section className={containerClasses}>
        <h2>
          <Skeleton className="w-32" />
        </h2>
        <ProductImg isSkeleton={true} />
        <Skeleton className="w-16" />
        <StarsRatingIcon grade={5} />
        <Skeleton className="w-28" />
        <Skeleton className="w-36" />
      </section>
    )
  }
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
