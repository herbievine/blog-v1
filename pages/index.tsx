import React from 'react'
import Navigation from '../components/modules/Navigation'
import TopCategories from '../components/modules/TopCategories'
import ListPosts from '../components/posts/ListPosts'
import PopularPosts from '../components/posts/PopularPosts'
import withApollo from '../lib/withApollo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <>
      <Navigation />
      <div className="mt-16 w-5/6 mx-auto flex items-start">
        <div className="w-full flex justify-between items-start">
          <ListPosts className="md:w-4/6 w-full" />
          <div className="hidden sticky ml-12 w-2/6 md:flex flex-col">
            <TopCategories className="w-full" />
            <PopularPosts className="mt-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'index'])),
  },
})

export default withApollo({ ssr: false })(Index)
