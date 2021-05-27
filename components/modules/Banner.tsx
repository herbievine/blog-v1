import React from 'react'

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div className="w-screen h-4 bg-gradient-to-r from-purple-600 to-blue-400"></div>
  )
}

export default Banner
