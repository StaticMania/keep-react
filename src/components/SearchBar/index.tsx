import { FC, ReactNode } from 'react'
import { TextInput, TextInputColors, TextInputSizes } from '../FormControls/TextInput'

interface SearchBarProps {
  placeholder?: string
  color?: keyof TextInputColors
  size?: keyof TextInputSizes
  addon?: ReactNode
  icon?: ReactNode
  addonPosition?: 'left' | 'right'
  iconPosition?: 'left' | 'right'
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  children?: ReactNode
  disabled?: boolean
  bordered?: boolean
  withBg?: boolean
  className?: string
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  color = 'gray',
  size = 'lg',
  addon,
  addonPosition = 'left',
  icon,
  iconPosition = 'left',
  handleOnChange,
  children,
  disabled,
  withBg,
  bordered,
  className,
}) => {
  return (
    <div role="searchbox">
      <TextInput
        id="search-input"
        placeholder={placeholder}
        color={color}
        sizing={size}
        addon={addon}
        withBg={withBg}
        icon={icon ? icon : ''}
        addonPosition={addonPosition}
        iconPosition={iconPosition}
        handleOnChange={handleOnChange}
        disabled={disabled}
        border={bordered}
        className={className}
      />
      {children}
    </div>
  )
}
