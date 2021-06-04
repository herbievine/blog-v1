import Image from 'next/image'
import React from 'react'

interface ImageRendererProps {
  node: any
}

const ImageRenderer: React.FC<ImageRendererProps> = ({ node }) => {
  const { src, alt } = node.properties
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  return (
    <div className="py-6 w-full max-w-lg mx-auto">
      <img src={baseUrl + src} alt={alt} decoding="async" />
    </div>
  )
}

export default ImageRenderer
