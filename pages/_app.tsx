import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Banner from '../components/modules/Banner'
import Footer from '../components/modules/Footer'
import { useState } from 'react'
import { ThemeContext } from '../components/contexts/ThemeContext'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  return (
    <>
      <Head>
        <title>Herbie Vine</title>
      </Head>
      <Banner />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
