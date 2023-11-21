import { FC, ReactNode } from 'react'
import { TextInput, TextInputColors, TextInputSizes } from '../FormControls/TextInput'

/**
 * Props for the SearchBar component.
 * @interface SearchBarProps
 */
interface SearchBarProps {
  /**
   * The placeholder text for the input field.
   */
  placeholder?: string

  /**
   * The color of the input field. Can be one of the predefined TextInputColors.
   */
  color?: keyof TextInputColors

  /**
   * The size of the input field. Can be one of the predefined TextInputSizes.
   */
  size?: keyof TextInputSizes

  /**
   * Additional content to be displayed before or after the input field.
   */
  addon?: ReactNode

  /**
   * The icon to be displayed before or after the input field.
   */
  icon?: ReactNode

  /**
   * The position of the addon content relative to the input field. Can be 'left' or 'right'.
   */
  addonPosition?: 'left' | 'right'

  /**
   * The position of the icon relative to the input field. Can be 'left' or 'right'.
   */
  iconPosition?: 'left' | 'right'

  /**
   * A callback function to handle the onChange event of the input field.
   */
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Additional children to be rendered inside the SearchBar component.
   */
  children?: ReactNode

  /**
   * Specifies whether the input field is disabled.
   */
  disabled?: boolean

  /**
   * Specifies whether the input field should have a border.
   */
  bordered?: boolean

  /**
   * Specifies whether the input field should have a background color.
   */
  withBg?: boolean

  /**
   * Additional CSS class name(s) for the SearchBar component.
   */
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
