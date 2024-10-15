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
            <Button variant="outline" className="gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              Add Order
            </Button>
            <Button variant="outline" className="gap-1.5">
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
                <DropdownContent align="end" className="w-[200px] border border-metal-100 p-3 dark:border-metal-800">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Move</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const OrdersTableCode = {
  'TableComponent.tsx': `
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
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Total Orders</h2>
            <Badge color="secondary">200 Orders</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" className="gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              Add Order
            </Button>
            <Button variant="outline" className="gap-1.5">
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
            <TableCell className="text-center">{item.price.toLocaleString()}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>
              <Dropdown>
                <DropdownAction asChild>
                  <button>
                    <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                  </button>
                </DropdownAction>
                <DropdownContent align="end" className="w-[200px] border border-metal-100 p-3 dark:border-metal-800">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Move</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
`,
  'TableData.ts': `
  const tableData = [
  {
    id: 1,
    type: 'DL-19266755',
    date: {
      day: 'Feb 28, 2024',
      time: '10:00 am',
    },
    country: '/images/icon/country-0.svg',
    status: 'Delivered',
    quant: 100,
    price: 21000,
    location: 'New York, USA',
  },
  {
    id: 2,
    type: 'DL-19266756',
    date: {
      day: 'Mar 1, 2024',
      time: '11:00 am',
    },
    country: '/images/icon/country-1.svg',
    status: 'In Transit',
    quant: 200,
    price: 42000,
    location: 'Los Angeles, USA',
  },
  {
    id: 3,
    type: 'DL-19266757',
    date: {
      day: 'Mar 2, 2024',
      time: '12:00 pm',
    },
    country: '/images/icon/country-2.svg',
    status: 'Pending',
    quant: 150,
    price: 31500,
    location: 'Chicago, USA',
  },
  {
    id: 4,
    type: 'DL-19266758',
    date: {
      day: 'Mar 3, 2024',
      time: '1:00 pm',
    },
    country: '/images/icon/country-4.svg',
    status: 'Delivered',
    quant: 300,
    price: 63000,
    location: 'Houston, USA',
  },
  {
    id: 5,
    type: 'DL-19266759',
    date: {
      day: 'Mar 4, 2024',
      time: '2:00 pm',
    },
    country: '/images/icon/country-5.svg',
    status: 'In Transit',
    quant: 250,
    price: 52500,
    location: 'Phoenix, USA',
  },
]
  `,
}

export { OrdersTable, OrdersTableCode }
