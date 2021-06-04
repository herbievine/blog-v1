import React from 'react'
import Message from '@/components/modules/Message'

interface SearchNotFoundProps {}

const SearchNotFound: React.FC<SearchNotFoundProps> = ({}) => {
  return (
    <div>
      <Message
        title="Sorry"
        message="We can't seem to find the post that you're looking for."
      />
    </div>
  )
}

export default SearchNotFound
