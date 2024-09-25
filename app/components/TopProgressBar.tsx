'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Suspense } from 'react'

const TopProgressBar = () => {
  return (
    <Suspense>
      <ProgressBar height="2px" color="#1C222B" options={{ showSpinner: false }} shallowRouting />
    </Suspense>
  )
}

export default TopProgressBar
