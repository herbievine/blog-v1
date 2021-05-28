import { useRouter } from 'next/router'
import React from 'react'
import { useFindCategoriesQuery } from '../../generated/graphql'
import processBrightness from '../../utils/processBrightness'

interface TopCategoriesProps {
  className?: string
}

const TopCategories: React.FC<TopCategoriesProps> = ({ className }) => {
  const { data, loading } = useFindCategoriesQuery()
  const router = useRouter()

  return (
    <div
      className={`${className} p-6 rounded-lg flex flex-col dark:bg-gray-800 shadow-md`}
    >
      <h2>Top categories</h2>
      <div className="mt-2 h-px w-full px-6 bg-gray-800 dark:bg-gray-100"></div>
      <div className="mt-4 flex justify-start">
        {!loading && data?.categories?.length > 0 ? (
          <>
            {[...data.categories].map((category, index) => (
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
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default TopCategories
