import { FC, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Pause, X } from 'phosphor-react'
import { useTheme } from '../../Keep/ThemeContex'
import { useUploadContext } from './UploadContext'
import { useProgress } from './useProgress'

export interface UploadPendingTheme {
  base: string
  bgColor: string
  root: {
    base: string
    status: string
    statusBox: {
      base: string
      count: string
      dot: string
      time: string
    }
    confirmBox: {
      base: string
      pause: string
      dismiss: string
    }
  }
  progress: {
    bgBar: string
    mainBar: string
  }
}

export const UploadPending: FC = () => {
  const [divWidth, setDivWidth] = useState(0)
  const divRef = useRef<HTMLDivElement | null>(null)
  const theme = useTheme().theme.upload.uploadPending
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
    <div className={twMerge(theme.base)}>
      <div className={twMerge(theme.bgColor)} style={{ width: divOneWidth }}></div>
      <div className={twMerge(theme.root.base)}>
        <div>
          <p className={twMerge(theme.root.status)}>Uploadin...</p>
          <div className={twMerge(theme.root.statusBox.base)}>
            <p className={twMerge(theme.root.statusBox.count)}>{progress}%</p>
            <div className={twMerge(theme.root.statusBox.dot)}></div>
            <p className={twMerge(theme.root.statusBox.time)}>{uploadTime ? uploadTime : '10 Second Left'}</p>
          </div>
        </div>
        <div className={twMerge(theme.root.confirmBox.base)}>
          <button className={twMerge(theme.root.confirmBox.pause)}>
            <Pause size={14} color="#5E718D" />
          </button>
          <button className={twMerge(theme.root.confirmBox.dismiss)}>
            <X size={14} color="#FF3838" />
          </button>
        </div>
      </div>
      <div ref={divRef} className={theme.progress.bgBar}>
        <div style={{ width: divTwoWidth }} className={theme.progress.mainBar}></div>
      </div>
    </div>
  )
}
