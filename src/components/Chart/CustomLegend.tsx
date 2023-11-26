import type { Payload } from 'recharts/types/component/DefaultLegendContent'

/**
 * Represents the props for the CustomLegend component.
 * @interface propsType
 */
interface propsType {
  /**
   * The payload for the legend.
   * @type {Payload[]}
   */
  payload: Payload[]
}

const CustomLegend = (props: propsType) => {
  return (
    <ul className="!ml-5 mb-5 flex items-start gap-3">
      {props.payload.map(({ value }, index) => (
        <li key={index + 1} className="flex items-center gap-1 text-body-6 font-normal text-metal-500 ">
          <span className={`block h-2 w-2 rounded-full ${index < 1 ? 'bg-success-400' : 'bg-primary-500'}`}></span>
          <span className="first-letter:uppercase">{value}</span>
        </li>
      ))}
    </ul>
  )
}

export default CustomLegend
