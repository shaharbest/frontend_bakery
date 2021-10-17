import React from 'react'
import { SimpleForm, Create } from 'react-admin'
import BlogPostFields from './BlogPostFields'

function BlogPostCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <BlogPostFields />
      </SimpleForm>
    </Create>
  )
}

export default BlogPostCreate
