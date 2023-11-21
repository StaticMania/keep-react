import { ArrowClockwise, X } from 'phosphor-react'
import { FC, useEffect, useRef, useState } from 'react'
import { useUploadContext } from './UploadContext'
import { useTheme } from '../../Keep/ThemeContext'
import { useProgress } from './useProgress'
import { cn } from '../../helpers/cn'

export interface keepUploadFailedTheme {
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
      restart: string
      dismiss: string
    }
  }
  progress: {
    bgBar: string
    mainBar: string
  }
}

export const UploadFailed: FC = () => {
  const theme = useTheme().theme.upload.uploadFailed
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
            <ArrowClockwise size={14} color="#FF3838" />
          </button>
          <button className={cn(theme.root.confirmBox.dismiss)}>
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
