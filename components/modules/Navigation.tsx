import React, { useContext } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { useFindCategoriesQuery } from '../../generated/graphql'
import { ThemeContext } from '../contexts/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const router = useRouter()
  const { data, loading } = useFindCategoriesQuery()
  const { t } = useTranslation()

  return (
    <div className="w-full flex justify-center bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="text-sm h-20 w-5/6 bg-white dark:bg-gray-900 flex items-center justify-between">
        <div>
          <Link href={'/'}>Herbie Vine</Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="mr-2 md:mr-6">
            <Link href={'/latest'}>{t('latest')}</Link>
          </div>
          {!loading && data?.categories?.length > 0 && (
            <div className="relative inline-block text-left mr-2 md:mr-6">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex justify-center w-full px-3 py-1 leading-5 transition duration-150 ease-in-out focus:outline-none">
                      <p>{t('categories')}</p>
                      <svg
                        className="w-5 h-5 ml-1 -mr-1"
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
                        className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-100 dark:bg-gray-800 divide-y divide-gray-100 rounded-md outline-none"
                      >
                        <div className="py-2">
                          {[...data.categories].map((category, index) => (
                            <Menu.Item
                              key={index}
                              onClick={() =>
                                router.push(`/category/${category.label}`)
                              }
                            >
                              {({ active }) => (
                                <div
                                  className={`${
                                    active
                                      ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
                                      : 'text-gray-700 dark:text-gray-100'
                                  } flex justify-between w-full px-4 py-2 text-sm font-medium capitalize leading-5 text-left cursor-pointer`}
                                >
                                  <p>{category.label}</p>
                                </div>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          )}
          <div
            className="cursor-pointer"
            onClick={() =>
              setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
            }
          >
            {theme === 'dark' ? (
              <SunIcon className="mr-2 w-5 text-white" />
            ) : (
              <MoonIcon className="mr-2 w-5 text-gray-800" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
