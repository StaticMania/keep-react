'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import React from 'react'

const AppTopProgressBar = () => {
  return (
    <>
      <ProgressBar height="2px" color="#1fa2ff" options={{ showSpinner: false }} />
    </>
  )
}

export default AppTopProgressBar
