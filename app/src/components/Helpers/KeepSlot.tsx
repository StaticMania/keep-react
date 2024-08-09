'use client'
import { cloneElement } from 'react'

export const KeepSlot = (props: any) => {
  const { children, ...otherProps } = props
  return cloneElement(children, otherProps)
}
