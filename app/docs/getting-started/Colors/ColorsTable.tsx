import CodeBox from './CodeBox'
import { colors } from './ColorsApi'

const ColorsTable = () => {
  return (
    <section>
      <div className="my-8 space-y-4">
        <div className="flex flex-wrap items-start gap-4">
          {colors.success.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-wrap items-start gap-4">
          {colors.warning.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-wrap items-start gap-4">
          {colors.error.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
        <div className="flex flex-wrap items-start gap-4">
          {colors.metal.map((color) => {
            return <CodeBox key={color.id} code={color.code} color={color.className} id={color.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ColorsTable
