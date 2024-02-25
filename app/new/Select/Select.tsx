'use client'
import { CaretDown } from 'phosphor-react'
import { FC, ReactNode, useState } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { SelectContext } from './Context'
import { Item } from './Item'

export interface SelectProps {
  className?: string
  children?: ReactNode
  defaultValue?: string
}

export const SelectComponent: FC<SelectProps> = ({ children, className }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [value, setValue] = useState<string | null>()
  const [selectedValue, setSelectedValue] = useState<ReactNode>()

  const handleSelect = (selectedItem: string, item: ReactNode) => {
    setSelectedValue(item)
    setValue(selectedItem)
    setShowMenu(false)
  }

  console.log(value)

  return (
    <div className="relative w-[20rem] space-y-2">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={cn(
          'flex w-full items-center justify-between rounded-md border border-metal-100 bg-white px-3 py-2.5',
          className,
        )}>
        <span className="text-body-4 font-medium text-metal-600">{selectedValue ?? 'Select Item'}</span>
        <span>
          <CaretDown
            size={16}
            color="#5E718D"
            className={cn('transition-all duration-300', showMenu ? 'rotate-180' : 'rotate-0')}
          />
        </span>
      </button>
      {showMenu && (
        <div className="absolute z-50 w-full overflow-hidden rounded-md border border-metal-100 bg-white">
          <SelectContext.Provider value={{ handleSelect }}>{children}</SelectContext.Provider>
        </div>
      )}
    </div>
  )
}

Item.displayName = 'Select.Item'
export const Select = Object.assign(SelectComponent, {
  Item,
})
