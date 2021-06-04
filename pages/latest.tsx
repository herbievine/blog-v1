import DefaultWrapper from '@/components/layout/DefaultWrapper'
import Navigation from '@/components/modules/Navigation'
import SearchedPost, { Post } from '@/components/posts/SearchedPost'
import { useFindLatestQuery } from '@/generated/graphql'
import withApollo from '@/lib/withApollo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

interface LatestProps {}

const Latest: React.FC<LatestProps> = ({}) => {
  const { t } = useTranslation('latest')
  const { data, loading } = useFindLatestQuery()

  return (
    <>
      <Navigation />
      <DefaultWrapper>
        <div className="w-full">
          <div className="w-full flex justify-center">
            <h1>{t('recent')}</h1>
          </div>
          {!loading && data?.posts?.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {[...data.posts].map((post, index) => (
                <SearchedPost key={index} post={post as Post} />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </DefaultWrapper>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'latest'])),
  },
})

export default withApollo({ ssr: false })(Latest)
