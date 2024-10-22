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
  'TableData.ts': `
  const tableData = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
]
  `,
}
export { ProductTable, ProductTableCode }
