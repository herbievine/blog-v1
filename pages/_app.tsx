import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Banner from '../components/modules/Banner'
import { useState } from 'react'
import { ThemeContext } from '../components/contexts/ThemeContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <>
      <Head>
        <title>Herbie Vine</title>
      </Head>
      <Banner />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <div className="bg-white dark:bg-gray-900">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp
