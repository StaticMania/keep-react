import { cn } from '../../helpers/cn'
import type { ChangeEvent, ReactNode } from 'react'
import { FC } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { useTheme } from '../../Keep/ThemeContext'
import { Radio } from '../FormControls/Radio'

export interface keepCheckboxGroupTheme {
  label: {
    base: string
    iconRight: {
      on: string
      off: string
    }
    selected: {
      on: string
      off: string
    }
    spacing: string
  }

  main: {
    order: string
    spacing: string
  }
  root: {
    base: string
    icon: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    circleImg: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    squareImg: {
      base: string
      img: string
    }
  }
  textBox: {
    spacing: string
    order: string
    title: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    description: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
  }
}

/**
 * Props for the CheckboxGroup component.
 * @interface CheckboxGroupProps
 */

interface CheckboxGroupProps {
  /**
   * The type of the CheckboxGroup.
   * @type {'square' | 'circle'}
   * @default 'square'
   */
  checkboxType?: 'square' | 'circle'

  /**
   * The position of the CheckboxGroup.
   * @type {'left' | 'right'}
   * @default 'left'
   */
  checkboxPosition?: 'left' | 'right'

  /**
   * The title for the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  title: string

  /**
   * The description for the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  description?: string

  /**
   * The icon for the CheckboxGroup.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode

  /**
   * The image for the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  img?: string

  /**
   * The shape of the image for the CheckboxGroup.
   * @type {'square' | 'circle'}
   * @default 'circle'
   */
  imgShape?: 'square' | 'circle'

  /**
   * The name of the field for the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  fieldName?: string

  /**
   * The selection mode for the CheckboxGroup.
   * @type {'single' | 'multiple'}
   * @default 'single'
   */
  select?: 'single' | 'multiple'

  /**
   * The value of the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  value?: string

  /**
   * The selected value of the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  selected?: string

  /**
   * The event handler for option change in the CheckboxGroup.
   * @type {(e: React.ChangeEvent<HTMLInputElement>) => void}
   * @default () => {}
   */
  // eslint-disable-next-line no-unused-vars
  onOptionChange: (e: ChangeEvent<HTMLInputElement>) => void

  /**
   * The CSS class name for the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The CSS class name for the title of the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  titleClassName?: string

  /**
   * The CSS class name for the description of the CheckboxGroup.
   * @type {string}
   * @default ''
   */
  descriptionClassName?: string
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  checkboxType = 'square',
  title,
  description,
  checkboxPosition = 'left',
  icon,
  img,
  imgShape = 'circle',
  fieldName,
  value = '',
  selected,
  onOptionChange,
  titleClassName,
  descriptionClassName,
  className,
}) => {
  const theme = useTheme().theme.checkboxGroup
  return (
    <label
      className={cn(
        theme.label.base,
        checkboxPosition === 'right' || icon || img ? theme.label.iconRight.on : theme.label.iconRight.off,
        selected === value ? theme.label.selected.on : theme.label.selected.off,
        imgShape === 'circle' && theme.label.spacing,
        className,
      )}>
      <div
        className={cn(
          checkboxPosition === 'right' || icon || img ? theme.main.order : '',
          imgShape === 'square' && theme.main.spacing,
        )}>
        <Radio
          sizing="lg"
          name={fieldName}
          radioShape={checkboxType}
          value={value}
          selected={selected}
          onOptionChange={onOptionChange}
        />
      </div>
      <div className={cn(theme.root.base)}>
        {!img && typeof icon !== 'undefined' && (
          <div
            className={cn(
              selected === value ? theme.root.icon.selected.on : theme.root.icon.selected.off,
              theme.root.icon.base,
            )}>
            {icon}
          </div>
        )}
        {img && imgShape === 'circle' && (
          <div
            className={cn(
              theme.root.circleImg.base,
              selected === value ? theme.root.circleImg.selected.on : theme.root.circleImg.selected.off,
            )}>
            <Avatar img={img} shape="circle" />
          </div>
        )}
        {img && imgShape === 'square' && (
          <div className={cn(theme.root.squareImg.base)}>
            <img src={img} alt="checkbox" className={cn(theme.root.squareImg.img)} />
          </div>
        )}
        <div
          className={cn(
            imgShape === 'square' && theme.textBox.spacing,
            checkboxPosition === 'right' ? theme.textBox.order : '',
          )}>
          {title && (
            <p
              className={cn(
                theme.textBox.title.base,
                selected === value ? theme.textBox.title.selected.on : theme.textBox.title.selected.off,
                titleClassName,
              )}>
              {title}
            </p>
          )}

          {description && (
            <p
              className={cn(
                theme.textBox.description.base,
                selected === value ? theme.textBox.description.selected.on : theme.textBox.description.selected.off,
                descriptionClassName,
              )}>
              {description}
            </p>
          )}
        </div>
      </div>
    </label>
  )
}
