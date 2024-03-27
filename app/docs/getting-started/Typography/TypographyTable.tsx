import { FC } from 'react'
import { typographyData } from './TypographyAPI'

const remToPx = (rem: string) => {
  const remValue = Number(rem.split('rem')[0])
  return remValue * 16 + 'px'
}

interface TypographyTableProps {
  typoType: string
}

const TypographyTable: FC<TypographyTableProps> = ({ typoType }) => {
  let content

  if (typoType === 'heading') {
    content = (
      <tbody className="align-baseline">
        {typographyData.heading.map((data, index) => (
          <tr key={data['font-size']}>
            <td translate="no" className="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-metal-500">
              text-heading-{index + 1}
            </td>
            <td translate="no" className="border-t border-metal-100 px-4 py-3 text-body-4 font-medium text-metal-500">
              font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
              <br />
              line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
              <br />
              letter-spacing: {data['letter-spacing']};
            </td>
          </tr>
        ))}
      </tbody>
    )
  }

  if (typoType === 'body') {
    content = (
      <tbody className="align-baseline">
        {typographyData.body.map((data, index) => (
          <tr key={data['font-size']}>
            <td translate="no" className="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-metal-500">
              text-body-{index + 1}
            </td>
            <td translate="no" className="border-t border-metal-100 px-4 py-3 text-body-4 font-medium text-metal-500">
              font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
              <br />
              line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
              <br />
              letter-spacing: {data['letter-spacing']};
            </td>
          </tr>
        ))}
      </tbody>
    )
  }
  if (typoType === 'display') {
    content = (
      <tbody className="align-baseline">
        {typographyData.display.map((data) => (
          <tr key={data['font-size']}>
            <td translate="no" className="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-metal-500">
              text-display
            </td>
            <td translate="no" className="border-t border-metal-100 px-4 py-3 text-body-4 font-medium text-metal-500">
              font-size: {data['font-size']}; /* {remToPx(data['font-size'])} */
              <br />
              line-height: {data['line-height']}; /* {remToPx(data['line-height'])} */
              <br />
              letter-spacing: {data['letter-spacing']};
            </td>
          </tr>
        ))}
      </tbody>
    )
  }
  return (
    <div className="min-w-full flex-none overflow-hidden px-4 sm:px-6 md:px-0 lg:overflow-auto">
      <table className="whitespace-no-wrap z-50 mt-10 w-full min-w-max table-auto overflow-hidden rounded-xl bg-white text-left lg:min-w-min">
        <thead>
          <tr>
            <th className="rounded-tl-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white">Class</th>
            <th className="rounded-tr-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white">Properties</th>
          </tr>
        </thead>
        {content}
      </table>
    </div>
  )
}

export default TypographyTable
