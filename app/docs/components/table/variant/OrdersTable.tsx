'use client'
import {
  ArrowsDownUp,
  Calendar,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutlineVertical,
  Flag,
  Funnel,
  NavigationArrow,
  Plus,
  Spinner,
} from 'phosphor-react'
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../src'
import { data2 } from '../TableApi'

const OrdersTable = () => {
  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Total Orders</h2>
            <Badge color="secondary">200 Orders</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" color="secondary" size="sm" className="gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              Add Order
            </Button>
            <Button variant="outline" color="secondary" size="sm" className="gap-1.5">
              <Funnel className="size-4 fill-metal-900 dark:fill-white" />
              Filter Order
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>
            <p className="flex w-[100px] items-center gap-1.5">
              <ArrowsDownUp className="size-4 fill-metal-900 dark:fill-white" />
              Type
            </p>
          </TableHead>
          <TableHead>
            <p className="flex w-[100px] items-center gap-1.5">
              <Calendar className="size-4 fill-metal-900 dark:fill-white" />
              Date
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center gap-1.5">
              <Flag className="size-4 fill-metal-900 dark:fill-white" />
              Country
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center gap-1.5">
              <Spinner className="size-4 fill-metal-900 dark:fill-white" />
              Status
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center gap-1.5">
              <DotsNine className="size-4 fill-metal-900 dark:fill-white" />
              Quant.
            </p>
          </TableHead>
          <TableHead>
            <p className="flex w-[100px] items-center gap-1.5">
              <CurrencyDollar className="size-4 fill-metal-900 dark:fill-white" />
              Total Price
            </p>
          </TableHead>
          <TableHead>
            <p className="flex w-[120px] items-center gap-1.5">
              <NavigationArrow className="size-4 fill-metal-900 dark:fill-white" />
              Location
            </p>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data2.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>
              <div>
                <p>{item.date.day}</p>
                <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">{item.date.time}</p>
              </div>
            </TableCell>
            <TableCell className="flex items-center justify-center">
              <img src={item.country} alt="flag" />
            </TableCell>
            <TableCell>
              <Badge
                showIcon
                className="text-body-4"
                color={item.status === 'Delivered' ? 'success' : item.status === 'In Transit' ? 'error' : 'warning'}>
                {item.status}
              </Badge>
            </TableCell>
            <TableCell className="text-center">{item.quant}</TableCell>
            <TableCell className="text-center">${item.price.toLocaleString()}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>
              <Dropdown>
                <DropdownAction asChild>
                  <button>
                    <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                  </button>
                </DropdownAction>
                <DropdownContent className="max-w-[200px] p-3">
                  <DropdownList>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Move</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownList>
                </DropdownContent>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
