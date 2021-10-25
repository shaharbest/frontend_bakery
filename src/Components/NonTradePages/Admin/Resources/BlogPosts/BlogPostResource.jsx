import React from 'react'
import { Resource } from 'react-admin'
import BlogPostList from './BlogPostList'
import BlogPostEdit from './BlogPostEdit'
import BlogPostCreate from './BlogPostCreate'
import BlogPostIcon from '@material-ui/icons/Chat'

function BlogPostResource(props) {
  return (
    <Resource
      icon={BlogPostIcon}
      list={BlogPostList}
      edit={BlogPostEdit}
      create={BlogPostCreate}
      {...props}
    />
  )
}

export default BlogPostResource
