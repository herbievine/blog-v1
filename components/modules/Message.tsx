import React, { ReactNode } from 'react'
import {
  ExclamationIcon,
  CheckIcon,
  XIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid'

interface MessageProps {
  variant?: 'success' | 'error' | 'warning'
  title: string
  message: string
}

const Message: React.FC<MessageProps> = ({ variant, title, message }) => {
  let theme: string
  let icon: ReactNode

  if (variant === 'success') {
    theme = 'bg-green-200'
    icon = <CheckIcon className="mr-2 w-6" />
  } else if (variant === 'warning') {
    theme = 'bg-yellow-200'
    icon = <ExclamationIcon className="mr-2 w-6" />
  } else if (variant === 'error') {
    theme = 'bg-red-200'
    icon = <XIcon className="mr-2 w-6" />
  } else {
    theme = 'bg-gray-200'
    icon = <InformationCircleIcon className="mr-2 w-6" />
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className={`
          w-full rounded-xl p-8 shadow-md
          ${theme}
        `}
      >
        {title && (
          <div className="mb-2 flex items-center justify-start">
            {icon}
            <p className="font-bold text-color-700">{title}</p>
          </div>
        )}
        <p className="font-medium text-sm text-color-700">{message}</p>
      </div>
    </div>
  )
}

export default Message
