'use client'
import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { uploadTheme } from './theme'

export const UploadSuccess: FC = () => {
  const theme = uploadTheme.uploadSuccess
  return (
    <div className={cn(theme.base)}>
      <div className={cn(theme.bgColor)}></div>
      <div className={cn(theme.root.base)}>
        <div>
          <div className={cn(theme.root.left.base)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A9952" viewBox="0 0 256 256">
                <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
              </svg>
            </span>
            <p className={cn(theme.root.left.fileName)}>File Name.pdf</p>
          </div>
          <p className={cn(theme.root.left.fileSize)}>Size: 515 Kb</p>
        </div>
        <div className={cn(theme.root.confirmBox.base)}>
          <button className={cn(theme.root.confirmBox.checked)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0A9952" viewBox="0 0 256 256">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </button>
          <div className={cn(theme.root.confirmBox.divider)}></div>
          <button className={cn(theme.root.confirmBox.trash)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF3838" viewBox="0 0 256 256">
              <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
