'use client'
import { TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { cn } from '../../helpers/cn'

const CustomTooltip = ({
  active,
  payload,
  label,
  labelClassName,
  wrapperClassName,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload?.length) {
    return (
      <div className={cn('max-w-max rounded-md bg-primary-500 p-3', wrapperClassName)}>
        <p className={cn('text-body-3 font-semibold capitalize text-white', labelClassName)}>{label}</p>
        <p className={cn('text-body-4 font-medium capitalize text-white')}>
          {payload[0].name} : {payload[0].value}
        </p>

        {payload.length >= 2 && (
          <p className={cn('text-body-4 font-medium capitalize text-white')}>
            {payload[1].name} : {payload[1].value}
          </p>
        )}
      </div>
    )
  }

  return null
}

export { CustomTooltip }
