import { useRouter } from 'next/router'
import React from 'react'

interface PostNotFoundProps {}

const PostNotFound: React.FC<PostNotFoundProps> = ({}) => {
  const router = useRouter()

  return (
    <div>
      <h2>Sorry, that post no longer exists.</h2>
      <button onClick={() => router.replace('/')}>Back to home page</button>
    </div>
  )
}

export default PostNotFound
