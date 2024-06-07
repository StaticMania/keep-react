'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../../src'
import { data1 } from '../TableApi'

const DefaultTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="max-w-[250px]">File Name</div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">File Format</div>
          </TableHead>
          <TableHead>
            <div className="w-[85px]">Aspect Ratio</div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Resolution</div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">File Size</div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">Status</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data1.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="max-w-[250px] truncate">{item.fileName}</div>
            </TableCell>
            <TableCell>{item.fileFormat}</TableCell>
            <TableCell>{item.ratio}</TableCell>
            <TableCell>{item.resolution}</TableCell>
            <TableCell>{item.fileSize}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const DefaultTableCode = `
'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'

export const TableComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="max-w-[250px]">File Name</div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">File Format</div>
          </TableHead>
          <TableHead>
            <div className="w-[85px]">Aspect Ratio</div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Resolution</div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">File Size</div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">Status</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="max-w-[250px] truncate">{item.fileName}</div>
            </TableCell>
            <TableCell>{item.fileFormat}</TableCell>
            <TableCell>{item.ratio}</TableCell>
            <TableCell>{item.resolution}</TableCell>
            <TableCell>{item.fileSize}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
`
export { DefaultTable, DefaultTableCode }
