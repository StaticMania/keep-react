import { Check, FilePdf, Trash } from 'phosphor-react'
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
              <FilePdf size={24} color="#0A9952" />
            </span>
            <p className={cn(theme.root.left.fileName)}>File Name.pdf</p>
          </div>
          <p className={cn(theme.root.left.fileSize)}>Size: 515 Kb</p>
        </div>
        <div className={cn(theme.root.confirmBox.base)}>
          <button className={cn(theme.root.confirmBox.checked)}>
            <Check size={20} color="#0A9952" />
          </button>
          <div className={cn(theme.root.confirmBox.divider)}></div>
          <button className={cn(theme.root.confirmBox.trash)}>
            <Trash size={20} color="#FF3838" />
          </button>
        </div>
      </div>
    </div>
  )
}
