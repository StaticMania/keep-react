'use client'
import { ArrowsDownUp, Cube, DotsThreeOutline } from 'phosphor-react'
import { TransactionsTableData } from '~/public/data/tableData'
import {
  Avatar,
  Badge,
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '../../../../src'

const TransactionsTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Cash Out Transactions</p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
              </Button>
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </TableCaption>
        <TableHead>
          <TableHeadCell className="min-w-[290px]">
            <p className="text-body-5 font-medium text-metal-400">Type</p>
          </TableHeadCell>
          <TableHeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Date
          </TableHeadCell>
          <TableHeadCell className="min-w-[160px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Amount
          </TableHeadCell>
          <TableHeadCell className="min-w-[150px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Status
          </TableHeadCell>
          <TableHeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Received Date
          </TableHeadCell>
          <TableHeadCell className="min-w-[100px]" />
        </TableHead>
        <TableBody className="divide-gray-25 divide-y">
          {TransactionsTableData.map((cell) => (
            <TableRow key={cell.id} className="bg-white">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar img={cell.img} />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{cell.name}</p>
                        <span className="text-body-5 font-normal text-metal-500">{cell.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-5 font-normal text-metal-500">{cell.time}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">${cell.amount}</p>
              </TableCell>
              <TableCell>
                <div className="inline-block">
                  <Badge color="success">Delivered</Badge>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-5 font-normal text-metal-500">{cell.time}</p>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" shape="circle">
                  <DotsThreeOutline size={15} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const TransactionsTableCode = `
'use client'
import {
  Avatar,
  Badge,
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'keep-react'
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react'

export const TableComponent = () => {
  return (
    <Table showCheckbox={true}>
      <TableCaption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Cash Out Transactions</p>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              New member
            </Button>
            <Button variant="outline" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Search
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHead>
        <TableHeadCell className="min-w-[290px]">
          <p className="text-body-5 font-medium text-metal-400">Type</p>
        </TableHeadCell>
        <TableHeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Date
        </TableHeadCell>
        <TableHeadCell className="min-w-[160px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Amount
        </TableHeadCell>
        <TableHeadCell className="min-w-[150px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Status
        </TableHeadCell>
        <TableHeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Received Date
        </TableHeadCell>
        <TableHeadCell className="min-w-[100px]" />
      </TableHead>
      <TableBody className="divide-gray-25 divide-y">
        <TableRow className="bg-white">
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar img="/images/company/paypal.png" />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Paypal</p>
                    <span className="text-body-5 font-normal text-metal-500">Withdraw</span>
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-5 font-normal text-metal-500">3:45 pm</p>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">$652.00</p>
          </TableCell>
          <TableCell>
            <div className="inline-block">
              <Badge color="success">Delivered</Badge>
            </div>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-5 font-normal text-metal-500">3:45 pm</p>
          </TableCell>
          <TableCell>
            <Button variant="outline" size="sm" shape="circle">
              <DotsThreeOutline size={15} />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`
export { TransactionsTable, TransactionsTableCode }
