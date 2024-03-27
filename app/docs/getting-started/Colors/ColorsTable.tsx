import CodeBox from './CodeBox'
import { colors } from './ColorsApi'

const ColorsTable = () => {
  return (
    <section>
      <div className="my-8 flex flex-row lg:flex-col lg:space-y-4">
        <div className="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
          <div className="w-20">
            <p className="text-body-4 font-normal text-metal-600">Primary</p>
          </div>
          {colors.primary.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
          <div className="w-20">
            <p className="text-body-4 font-normal text-metal-600">Success</p>
          </div>
          {colors.success.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
          <div className="w-20">
            <p className="text-body-4 font-normal text-metal-600">Warning</p>
          </div>
          {colors.warning.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
          <div className="w-20">
            <p className="text-body-4 font-normal text-metal-600">Error</p>
          </div>
          {colors.error.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
          <div className="w-20">
            <p className="text-body-4 font-normal text-metal-600">Metal</p>
          </div>
          {colors.metal.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ColorsTable
