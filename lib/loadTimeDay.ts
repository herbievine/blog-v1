import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Load supported languages here
import('dayjs/locale/fr')
import('dayjs/locale/en')

const loadTimeDay = () => {
  const router = useRouter()

  dayjs.extend(relativeTime)
  dayjs.locale(router.locale.split('-')[0])

  useEffect(() => {
    dayjs.locale(router.locale.split('-')[0])
  }, [router.locale])
}

export default loadTimeDay
