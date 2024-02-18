'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import React from 'react'

const AppTopProgressBar = () => {
  return (
    <>
      <ProgressBar height="4px" color="#fffd00" options={{ showSpinner: false }} shallowRouting />
    </>
  )
}

export default AppTopProgressBar
