import React from 'react'
import Message from '../modules/Message'

interface SearchNotFoundProps {}

const SearchNotFound: React.FC<SearchNotFoundProps> = ({}) => {
  return (
    <div className="">
      <Message
        title="Sorry"
        message="We can't seem to find the post that you're looking for."
        variant="warning"
      />
    </div>
  )
}

export default SearchNotFound
