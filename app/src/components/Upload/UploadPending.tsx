'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { cn } from '../../helpers/cn'
import { useUploadContext } from './UploadContext'
import { uploadTheme } from './theme'
import { useProgress } from './useProgress'

export const UploadPending: FC = () => {
  const [divWidth, setDivWidth] = useState(0)
  const divRef = useRef<HTMLDivElement | null>(null)
  const theme = uploadTheme.uploadPending
  const { progress, uploadTime } = useUploadContext()

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
          <p className={cn(theme.root.status)}>Uploading...</p>
          <div className={cn(theme.root.statusBox.base)}>
            <p className={cn(theme.root.statusBox.count)}>{progress}%</p>
            <div className={cn(theme.root.statusBox.dot)}></div>
            <p className={cn(theme.root.statusBox.time)}>{uploadTime ? uploadTime : '10 Second Left'}</p>
          </div>
        </div>
        <div className={cn(theme.root.confirmBox.base)}>
          <button className={cn(theme.root.confirmBox.pause)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#5E718D" viewBox="0 0 256 256">
              <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path>
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
