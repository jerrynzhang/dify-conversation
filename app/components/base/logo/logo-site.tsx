'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src="https://assets.dify.ai/images/dify_logo_dark.png"
      className={classNames('block w-[28.651px] h-[24.5px]', className)}
      alt='logo'
    />
  )
}

export default LogoSite
