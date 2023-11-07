import type { Payload } from 'recharts/types/component/DefaultLegendContent'
interface propsType {
  payload: Payload[]
}

const CustomLegend = (props: propsType) => {
  return (
    <ul className="!ml-5 mb-5 flex items-start gap-3">
      {props.payload.map(({ value }, index) => (
        <li key={index + 1} className="flex items-center gap-1 text-xs font-normal text-slate-500 ">
          <span className={`block h-2 w-2 rounded-full ${index < 1 ? 'bg-success-400' : 'bg-primary-500'}`}></span>
          <span className="first-letter:uppercase">{value}</span>
        </li>
      ))}
    </ul>
  )
}

export default CustomLegend
