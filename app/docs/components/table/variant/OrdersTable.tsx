'use client'
import Image from 'next/image'
import { CalendarBlank, Cube, CurrencyDollar, DotsNine, DotsThreeOutline, Flag, Spinner, Tag } from 'phosphor-react'
import { OrderTableData } from '~/public/data/tableData'
import {
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

const OrdersTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Orders</p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
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
          <TableHeadCell className="min-w-[302px]">
            <p className="text-body-5 font-medium text-metal-400">Order no.</p>
          </TableHeadCell>
          <TableHeadCell
            className="min-w-[165px]"
            icon={<CalendarBlank size={14} color="#8897AE" />}
            iconPosition="left">
            Date
          </TableHeadCell>
          <TableHeadCell className="min-w-[124px]" icon={<Flag size={14} color="#8897AE" />} iconPosition="left">
            Country
          </TableHeadCell>
          <TableHeadCell className="min-w-[152px]" icon={<Spinner size={14} color="#8897AE" />} iconPosition="left">
            State
          </TableHeadCell>
          <TableHeadCell className="min-w-[114px]" icon={<DotsNine size={14} color="#8897AE" />} iconPosition="left">
            Quant.
          </TableHeadCell>
          <TableHeadCell
            className="min-w-[138px]"
            icon={<CurrencyDollar size={14} color="#8897AE" />}
            iconPosition="left">
            Total Price
          </TableHeadCell>
          <TableHeadCell className="min-w-[150px]" icon={<Tag size={14} color="#8897AE" />} iconPosition="left">
            Location
          </TableHeadCell>
          <TableHeadCell className="min-w-[100px]" />
        </TableHead>
        <TableBody className="divide-gray-25 divide-y">
          {OrderTableData.map((cell) => (
            <TableRow key={cell.id} className="bg-white">
              <TableCell>
                <p className="text-body-4 font-medium text-metal-500">{cell.orderNo}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-5 font-normal text-metal-500">{cell.time}</p>
              </TableCell>
              <TableCell>
                <Image src={cell.img} alt="country" height="18" width="24" />
              </TableCell>
              <TableCell>
                <div className="inline-block">
                  <Badge color="success">Delivered</Badge>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.quantity}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">${cell.amount}</p>
              </TableCell>
              <TableCell>
                <p className="text-body-5 font-medium text-metal-500">{cell.location}</p>
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

const OrdersTableCode = `
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

import {
  CalendarBlank,
  Crown,
  Cube,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutline,
  Flag,
  Pencil,
  Spinner,
  Tag,
  Trash,
} from "phosphor-react";


export const TableComponent = () => {
  return (
    <Table showCheckbox={true}>
      <TableCaption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Orders</p>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Filter
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
        <TableHeadCell className="min-w-[302px]">
          <p className="text-body-5 font-medium text-metal-400">Order no.</p>
        </TableHeadCell>
        <TableHeadCell
          className="min-w-[165px]"
          icon={<CalendarBlank size={14} color="#8897AE" />}
          iconPosition="left">
          Date
        </TableHeadCell>
        <TableHeadCell className="min-w-[124px]" icon={<Flag size={14} color="#8897AE" />} iconPosition="left">
          Country
        </TableHeadCell>
        <TableHeadCell className="min-w-[152px]" icon={<Spinner size={14} color="#8897AE" />} iconPosition="left">
          State
        </TableHeadCell>
        <TableHeadCell className="min-w-[114px]" icon={<DotsNine size={14} color="#8897AE" />} iconPosition="left">
          Quant.
        </TableHeadCell>
        <TableHeadCell
          className="min-w-[138px]"
          icon={<CurrencyDollar size={14} color="#8897AE" />}
          iconPosition="left">
          Total Price
        </TableHeadCell>
        <TableHeadCell className="min-w-[150px]" icon={<Tag size={14} color="#8897AE" />} iconPosition="left">
          Location
        </TableHeadCell>
        <TableHeadCell className="min-w-[100px]" />
      </TableHead>
      <TableBody className="divide-gray-25 divide-y">
        <TableRow className="bg-white">
          <TableCell>
            <p className="text-body-4 font-medium text-metal-500">DL - 19266755</p>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-5 font-normal text-metal-500">3:45 pm</p>
          </TableCell>
          <TableCell>
            <Image src="/images/icon/country-0.svg" alt="country" height="18" width="24" />
          </TableCell>
          <TableCell>
            <div className="inline-block">
              <Badge color="success">Delivered</Badge>
            </div>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">3</p>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">$21,000</p>
          </TableCell>
          <TableCell>
            <p className="text-body-5 font-medium text-metal-500">285 Great North Road, Grey Lynn.</p>
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

export { OrdersTable, OrdersTableCode }
