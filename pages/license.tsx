import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import DefaultWrapper from '@/components/layout/DefaultWrapper'
import Navigation from '@/components/modules/Navigation'
import withApollo from '@/lib/withApollo'

interface LicenseProps {}

const License: React.FC<LicenseProps> = ({}) => {
  return (
    <>
      <Navigation />
      <DefaultWrapper>
        <div className="w-full mt-24 flex flex-col justify-start items-center">
          <h1 className=" text-lg text-gray-700 capitalize">License</h1>

          <div className="w-full mt-6 flex flex-col justify-start items-start">
            <p className="mb-2">Copyright 2021 Herbie Vine</p>
            <p className="mb-2">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="mb-2">
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </DefaultWrapper>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'index'])),
  },
})

export default withApollo({ ssr: false })(License)
