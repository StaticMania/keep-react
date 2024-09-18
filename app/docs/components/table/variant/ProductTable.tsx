'use client'
import { DotsThreeOutlineVertical, Funnel, Plus } from 'phosphor-react'
import {
  Badge,
  Button,
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
import { data3 } from '../TableApi'

const ProductTable = () => {
  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Total Product</h2>
            <Badge>500 Product</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" className="flex gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              Add Product
            </Button>
            <Button variant="outline" className="flex gap-1.5">
              <Funnel className="size-4 fill-metal-900 dark:fill-white" />
              Filter Product
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="w-[320px]">Product Name</div>
          </TableHead>
          <TableHead>
            <div className="w-[65px]">Price</div>
          </TableHead>
          <TableHead>
            <div className="w-[100px]">Category</div>
          </TableHead>
          <TableHead>
            <div className="w-[60px]">Rating</div>
          </TableHead>
          <TableHead>
            <div className="w-[60px]">Stock</div>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data3.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.rating.rate}</TableCell>
            <TableCell>{item.rating.count}</TableCell>
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

const ProductTableCode = {
  'TableComponent.tsx': `
'use client'
import { DotsThreeOutlineVertical, Funnel, Plus } from 'phosphor-react'
import {
  Badge,
  Button,
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
} from 'keep-react'

export const TableComponent = () => {
  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Total Product</h2>
            <Badge className="dark:bg-metal-800 dark:text-white">
              500 Product
            </Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" className="flex gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              Add Product
            </Button>
            <Button variant="outline" className="flex gap-1.5">
              <Funnel className="size-4 fill-metal-900 dark:fill-white" />
              Filter Product
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="w-[320px]">Product Name</div>
          </TableHead>
          <TableHead>
            <div className="w-[65px]">Price</div>
          </TableHead>
          <TableHead>
            <div className="w-[100px]">Category</div>
          </TableHead>
          <TableHead>
            <div className="w-[60px]">Rating</div>
          </TableHead>
          <TableHead>
            <div className="w-[60px]">Stock</div>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data3.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.rating.rate}</TableCell>
            <TableCell>{item.rating.count}</TableCell>
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
}
export { ProductTable, ProductTableCode }
