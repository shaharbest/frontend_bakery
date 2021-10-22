import React from 'react'
import GroupProducts from './GroupProducts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { listProductGroups } from '../../../redux/actions/productGroupsActions'

function AllGroupsProducts() {
  const dispatch = useDispatch()
  const { loading, error, productGroups } = useSelector(
    (state) => state.productGroupList
  )

  useEffect(() => {
    dispatch(listProductGroups())
  }, [dispatch])

  return (
    <section>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        productGroups.map((curGroup) => (
          <GroupProducts key={curGroup.id} group={curGroup} />
        ))
      )}
    </section>
  )
}

export default AllGroupsProducts
