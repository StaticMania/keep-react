import { twMerge } from 'tailwind-merge'
import { ArrowClockwise, X } from 'phosphor-react'
import { FC, useEffect, useRef, useState } from 'react'
import { useUploadContext } from './UploadContext'
import { useTheme } from '../../Keep/ThemeContext'
import { useProgress } from './useProgress'

/**
 * Interface representing the theme for the keepUploadFailed component.
 */
export interface keepUploadFailedTheme {
  /** The base color for the upload failed component. */
  base: string
  /** The background color for the upload failed component. */
  bgColor: string
  /** The root configuration for the upload failed component. */
  root: {
    base: string
    status: string
    /** The status box configuration for the upload failed component. */
    statusBox: {
      base: string
      count: string
      dot: string
      time: string
    }
    /** The confirm box configuration for the upload failed component. */
    confirmBox: {
      base: string
      restart: string
      dismiss: string
    }
  }
  /** The progress configuration for the upload failed component. */
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
    <div className={twMerge(theme.base)}>
      <div className={twMerge(theme.bgColor)} style={{ width: divOneWidth }}></div>
      <div className={twMerge(theme.root.base)}>
        <div>
          <p className={twMerge(theme.root.status)}>Something error</p>
          <div className={twMerge(theme.root.statusBox.base)}>
            <p className={twMerge(theme.root.statusBox.count)}>{progress}%</p>
            <div className={twMerge(theme.root.statusBox.dot)}></div>
            <p className={twMerge(theme.root.statusBox.time)}>{uploadTime ? uploadTime : '10 Second Left'}</p>
          </div>
        </div>
        <div className={twMerge(theme.root.confirmBox.base)}>
          <button className={twMerge(theme.root.confirmBox.restart)}>
            <ArrowClockwise size={14} color="#FF3838" />
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
