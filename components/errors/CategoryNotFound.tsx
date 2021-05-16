import { useRouter } from 'next/router'
import React from 'react'
import Message from '../modules/Message'

interface CategoryNotFoundProps {}

const CategoryNotFound: React.FC<CategoryNotFoundProps> = ({}) => {
  const router = useRouter()

  return (
    <div className="">
      <Message
        title="Sorry"
        message="We can't seem to find the category that you're looking for."
      />
    </div>
  )
}

export default CategoryNotFound
