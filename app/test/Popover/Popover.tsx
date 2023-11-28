'use client'

import { FC, Fragment, ReactNode } from 'react'

interface PopoverProps {
  children?: ReactNode
}

export const Popover: FC<PopoverProps> = ({ children }) => {
  return (
    <Fragment>
      <span className="peer relative">{children}</span>
      <div className="max-w-md rounded peer-hover:absolute peer-hover:left-0 peer-hover:top-0 peer-hover:bg-slate-900">
        Sheikh Hasina eyeing her fourth consecutive term in power. range of violent crimes.
      </div>
    </Fragment>
  )
}
