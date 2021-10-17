import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'
import BlogPostFields from './BlogPostFields'

function BlogPostEdit(props) {
  return (
    <Edit title={<BlogPostTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <BlogPostFields />
      </SimpleForm>
    </Edit>
  )
}

const BlogPostTitle = ({ record }) => {
  return <span>BlogPost {record ? `"${record.title}"` : ''}</span>
}

export default BlogPostEdit
