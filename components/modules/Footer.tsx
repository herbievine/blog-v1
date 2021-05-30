import Link from 'next/link'
import React from 'react'

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="mt-8 h-24 bg-white dark:bg-gray-900 flex items-center justify-center">
      <h2 className="font-medium text-sm">
        Website made by{' '}
        <Link href={'https://github.com/herbievine'}>Herbie Vine</Link>
      </h2>
    </div>
  )
}

export default Footer
