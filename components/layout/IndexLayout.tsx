import React, { useEffect, useState } from 'react'
import { useScreenType } from '../../hooks/useScreenType'
import PopularPosts from '../posts/PopularPosts'
import TopCategories from '../modules/TopCategories'
import ListPosts from '../posts/ListPosts'

interface IndexLayoutProps {}

const IndexLayout: React.FC<IndexLayoutProps> = ({}) => {
  const cols = useScreenType()

  return cols === '2-cols' ? (
    <div className="w-full flex items-start">
      <ListPosts className="w-4/6" />
      <div className="sticky ml-12 w-2/6 flex flex-col">
        <TopCategories className="w-full" />
        <PopularPosts className="mt-4" />
      </div>
    </div>
  ) : (
    <ListPosts className="w-full" />
  )
}

export default IndexLayout
