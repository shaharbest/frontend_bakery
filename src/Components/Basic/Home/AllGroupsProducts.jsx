import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { listProductGroups } from '../../../redux/actions/productGroupsActions'
import GroupCarousel from './GroupCarousel'

function AllGroupsProducts() {
  const dispatch = useDispatch()
  const { loading, error, productGroups } = useSelector(
    (state) => state.productGroupList
  )

  useEffect(() => {
    dispatch(listProductGroups())
  }, [dispatch])

  return (
    <div className="flex flex-col gap-2 m-2">
      {loading ? (
        <>
          <GroupCarousel />
          <GroupCarousel />
          <GroupCarousel />
        </>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        productGroups.map((curGroup) => (
          <GroupCarousel key={curGroup.id} group={curGroup} />
        ))
      )}
    </div>
  )
}

export default AllGroupsProducts
