import { useTheme } from '../../Keep/ThemeContext'
import { twMerge } from 'tailwind-merge'
import { Check, FilePdf, Trash } from 'phosphor-react'
import { FC } from 'react'
/**
 * Represents the theme for the UploadSuccess component.
 */
export interface UploadSuccessTheme {
  /** The base color for the upload success component. */
  base: string
  /** The background color for the upload success component. */
  bgColor: string
  /** The root configuration for the upload success component. */
  root: {
    /** The base style for the upload success component. */
    base: string
    /** The left configuration for the upload success component. */
    left: {
      base: string
      fileName: string
      fileSize: string
    }
    /** The confirm box configuration for the upload success component. */
    confirmBox: {
      base: string
      checked: string
      divider: string
      trash: string
    }
  }
}

export const UploadSuccess: FC = () => {
  const theme = useTheme().theme.upload.uploadSuccess
  return (
    <div className={twMerge(theme.base)}>
      <div className={twMerge(theme.bgColor)}></div>
      <div className={twMerge(theme.root.base)}>
        <div>
          <div className={twMerge(theme.root.left.base)}>
            <span>
              <FilePdf size={24} color="#0A9952" />
            </span>
            <p className={twMerge(theme.root.left.fileName)}>File Name.pdf</p>
          </div>
          <p className={twMerge(theme.root.left.fileSize)}>Size: 515 Kb</p>
        </div>
        <div className={twMerge(theme.root.confirmBox.base)}>
          <button className={twMerge(theme.root.confirmBox.checked)}>
            <Check size={20} color="#0A9952" />
          </button>
          <div className={twMerge(theme.root.confirmBox.divider)}></div>
          <button className={twMerge(theme.root.confirmBox.trash)}>
            <Trash size={20} color="#FF3838" />
          </button>
        </div>
      </div>
    </div>
  )
}
