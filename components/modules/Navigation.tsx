import React from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { useFindCategoriesQuery } from '../../generated/graphql'

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const router = useRouter()
  const { data, loading } = useFindCategoriesQuery()

  return (
    <div className="h-12 px-4 flex items-center justify-between sticky top-0 z-50">
      <div className="text-sm uppercase font-bold text-gray-700">
        <Link href={'/'}>Vuter</Link>
      </div>
      <div className="flex items-center justify-end">
        <div className="mr-4 flex items-center">
          {!loading &&
            [...data?.categories].map((category, index) => {
              const last =
                data?.categories.length < 6 ? data?.categories.length - 1 : 5

              return index < 6 ? (
                <div
                  key={index}
                  className={`text-sm uppercase font-bold text-gray-700 ${
                    index !== last ? 'mr-6' : null
                  }`}
                >
                  <Link href={`/category/${category.label.toLowerCase()}`}>
                    {category.label}
                  </Link>
                </div>
              ) : null
            })}
        </div>
        {!loading && data?.categories.length > 6 && (
          <div className="relative inline-block text-left mr-4">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="inline-flex justify-center w-full px-3 py-1 leading-5 transition duration-150 ease-in-out focus:outline-none">
                    <span className="text-sm uppercase font-bold text-gray-700">
                      More
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 -mr-1 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>

                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-md outline-none"
                    >
                      <div className="py-1">
                        {[...data.categories].map((category, index) =>
                          index >= 6 ? (
                            <Menu.Item
                              key={index}
                              onClick={() =>
                                router.push(
                                  `/category/${category.label.toLowerCase()}`
                                )
                              }
                            >
                              {({ active }) => (
                                <div
                                  className={`${
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700'
                                  } flex justify-between w-full px-4 py-2 text-sm uppercase font-bold leading-5 text-left cursor-pointer`}
                                >
                                  <p>{category.label}</p>
                                </div>
                              )}
                            </Menu.Item>
                          ) : null
                        )}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        )}
        <div>
          <input
            className="w-44 py-1 px-3 bg-gray-200 rounded-md text-sm font-medium focus:outline-none"
            type="text"
            // value={router.query.q ?? ''}
            placeholder="Search..."
            onChange={(e) =>
              router.replace(`/search?q=${e.target.value.toLowerCase()}`)
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Navigation
