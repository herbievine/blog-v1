import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'
import SolidTwitter from '@/icons/SolidTwitter'
import SolidLinkedIn from '@/icons/SolidLinkedIn'
import SolidGitHub from '@/icons/SolidGitHub'

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const socials = [
    {
      path: 'https://twitter.com/herbievine',
      icon: (
        <div className="p-2 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-full">
          <SolidTwitter className="w-4 text-gray-900 dark:text-white" />
        </div>
      ),
    },
    {
      path: 'https://linkedin.com/in/herbievine',
      icon: (
        <div className="p-2 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-full">
          <SolidLinkedIn className="w-4 text-gray-900 dark:text-white" />
        </div>
      ),
    },
    {
      path: 'https://github.com/herbievine',
      icon: (
        <div className="p-2 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-full">
          <SolidGitHub className="w-4 text-gray-900 dark:text-white" />
        </div>
      ),
    },
  ]

  return (
    <footer className="font-medium w-11/12 sm:w-5/6 mx-auto text-sm mt-8 bg-white dark:bg-gray-900">
      <div className="py-12 flex items-center justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="py-1">
            <Link href={'/license'}>Copyright &copy; 2021</Link>
          </div>
          <div className="py-1">
            <p>{t('made')}</p>
          </div>
          <div className="py-1">
            <div className="relative inline-block text-right">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex justify-center w-full leading-5 transition duration-150 ease-in-out focus:outline-none">
                      <p>{t('language')}</p>
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
                        className="absolute left-0 bottom-0 w-56 mb-6 mt-2 origin-bottom-right bg-gray-100 dark:bg-gray-800 divide-y divide-gray-100 rounded-md outline-none"
                      >
                        <div className="py-2">
                          {router.locales &&
                            [...router.locales].map((locale, index) => (
                              <Menu.Item
                                key={index}
                                onClick={() =>
                                  router.push(router.asPath, router.asPath, {
                                    locale,
                                  })
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
                                    <p>{locale}</p>
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
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          {[...socials].map((social, index) => (
            <div
              key={index}
              className={index !== socials.length - 1 ? 'mb-2' : ''}
              onClick={() => window.open(social.path, 'blank')}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
