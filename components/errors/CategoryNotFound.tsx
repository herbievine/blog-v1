import React from 'react'
import Message from '@/components/modules/Message'

interface CategoryNotFoundProps {}

const CategoryNotFound: React.FC<CategoryNotFoundProps> = ({}) => {
  return (
    <div>
      <Message
        title="Sorry"
        message="We can't seem to find the category that you're looking for."
      />
    </div>
  )
}

export default CategoryNotFound
