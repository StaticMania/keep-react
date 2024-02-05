'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { cn } from '../../helpers/cn'
import { Dismiss } from './Dismiss'
import { Frame } from './Frame'
import { PlayContext } from './PlayContext'
import { Player } from './Player'
import { playTheme } from './theme'

interface PlayProps {
  children?: ReactNode
  className?: string
  shadowStyle?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  shadow?: boolean
  [key: string]: any
}

export const PlayComponent: FC<PlayProps> = ({
  children,
  className,
  shadow = false,
  color = 'primary',
  size = 'md',
  shadowStyle,
  ...props
}) => {
  const [show, setShow] = useState<boolean>(false)

  const handleModal = () => {
    setShow(!show)
  }

  useEffect(() => {
    const handleKeyDown = (event: { key: string; keyCode: number }) => {
      if ((event.key === 'Escape' || event.keyCode === 27) && show) {
        setShow(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [show])
  return (
    <div {...props}>
      <button
        onClick={() => setShow(!show)}
        className={cn(playTheme.base, playTheme.size[size], playTheme.color[color], className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(playTheme.iconSize[size])}
          viewBox="0 0 25 30"
          fill="none">
          <path
            d="M24.1476 14.0038L2.46341 1.11201C2.28087 1.00254 2.0716 0.942397 1.85717 0.937787C1.64275 0.933176 1.43094 0.984263 1.2436 1.08578C1.05626 1.18729 0.900168 1.33556 0.791427 1.51528C0.682687 1.69501 0.625236 1.89968 0.625 2.10819V27.8918C0.625236 28.1003 0.682687 28.305 0.791427 28.4847C0.900168 28.6644 1.05626 28.8127 1.2436 28.9142C1.43094 29.0157 1.64275 29.0668 1.85717 29.0622C2.0716 29.0576 2.28087 28.9975 2.46341 28.888L24.1476 15.9962C24.3257 15.8938 24.4733 15.7481 24.5757 15.5734C24.6782 15.3987 24.7321 15.2011 24.7321 15C24.7321 14.7989 24.6782 14.6013 24.5757 14.4266C24.4733 14.2519 24.3257 14.1062 24.1476 14.0038Z"
            fill="white"
          />
        </svg>
      </button>
      {show && children && <PlayContext.Provider value={{ handleModal }}>{children}</PlayContext.Provider>}
      {show && shadow && <div className={cn(playTheme.shadow, shadowStyle)}></div>}
    </div>
  )
}

Player.displayName = 'Play.Player'
Dismiss.displayName = 'Play.Close'
Frame.displayName = 'Play.Frame'

export const Play = Object.assign(PlayComponent, {
  Player,
  Close: Dismiss,
  Frame,
})
