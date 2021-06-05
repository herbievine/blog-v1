import { gql } from '@apollo/client'

export const FIND_POST_BY_SLUG = gql`
  query FindPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      slug
      views
      content
      created_at
      categories {
        label
        hexColor
      }
      user {
        id
        username
        email
        displayName
      }
    }
  }
`

export const FIND_POST_BY_CATEGORY = gql`
  query FindByCategory($category: String!) {
    posts(where: { categories: { label: $category } }) {
      id
      title
      slug
      views
      content
      created_at
      categories {
        label
        hexColor
      }
      user {
        id
        username
        email
        displayName
      }
    }
  }
`

export const FIND_ALL_POSTS = gql`
  query FindAllPosts {
    posts {
      slug
    }
  }
`

export const FIND_ALL_CATEGORIES = gql`
  query FindAllCategories {
    categories {
      label
      hexColor
      posts {
        id
      }
    }
  }
`
