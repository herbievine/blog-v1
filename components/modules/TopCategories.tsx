import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import { useFindCategoriesQuery } from '@/generated/graphql'
import processBrightness from '@/lib/processBrightness'

interface TopCategoriesProps {
  className?: string
}

const TopCategories: React.FC<TopCategoriesProps> = ({ className }) => {
  const { data, loading } = useFindCategoriesQuery()
  const router = useRouter()
  const { t } = useTranslation('index')

  return (
    <div
      className={`${className} p-6 rounded-lg flex flex-col bg-gray-100 dark:bg-gray-800`}
    >
      <h2>{t('top')}</h2>
      <div className="mt-2 h-px w-full px-6 bg-gray-800 dark:bg-gray-100"></div>
      <div className="mt-4 flex justify-start">
        {!loading && data?.categories?.length > 0 ? (
          <>
            {[...data.categories].map((category, index) =>
              category.posts.length > 0 ? (
                <div
                  onClick={() => router.push(`/category/${category.label}`)}
                  key={index}
                  className={`py-1 px-3 rounded-full border cursor-pointer ${
                    index !== data.categories.length - 1 && 'mr-2'
                  }`}
                  style={{
                    borderColor: category.hexColor,
                    background: category.hexColor,
                  }}
                >
                  <p
                    className="text-xs"
                    style={{
                      color:
                        parseFloat(
                          processBrightness(data.categories[index]?.hexColor)
                        ) > 0.5
                          ? '#000000'
                          : '#ffffff',
                    }}
                  >
                    {category.label}
                  </p>
                </div>
              ) : null
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default TopCategories
