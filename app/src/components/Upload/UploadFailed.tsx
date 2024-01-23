'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { cn } from '../../helpers/cn'
import { useUploadContext } from './UploadContext'
import { uploadTheme } from './theme'
import { useProgress } from './useProgress'

export const UploadFailed: FC = () => {
  const theme = uploadTheme.uploadFailed
  const { progress, uploadTime } = useUploadContext()
  const [divWidth, setDivWidth] = useState(0)
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.getBoundingClientRect().width
      setDivWidth(width)
    }
  }, [])

  const { divOneWidth, divTwoWidth } = useProgress({
    width: divWidth,
    progress: progress,
  })
  return (
    <div className={cn(theme.base)}>
      <div className={cn(theme.bgColor)} style={{ width: divOneWidth }}></div>
      <div className={cn(theme.root.base)}>
        <div>
          <p className={cn(theme.root.status)}>Something error</p>
          <div className={cn(theme.root.statusBox.base)}>
            <p className={cn(theme.root.statusBox.count)}>{progress}%</p>
            <div className={cn(theme.root.statusBox.dot)}></div>
            <p className={cn(theme.root.statusBox.time)}>{uploadTime ? uploadTime : '10 Second Left'}</p>
          </div>
        </div>
        <div className={cn(theme.root.confirmBox.base)}>
          <button className={cn(theme.root.confirmBox.restart)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#FF3838" viewBox="0 0 256 256">
              <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path>
            </svg>
          </button>
          <button className={cn(theme.root.confirmBox.dismiss)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#FF3838" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div ref={divRef} className={theme.progress.bgBar}>
        <div style={{ width: divTwoWidth }} className={theme.progress.mainBar}></div>
      </div>
    </div>
  )
}
