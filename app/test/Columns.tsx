'use client'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowDown, ArrowULeftUp } from 'phosphor-react'
import { Button, Checkbox, Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem } from '../src'

export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

//define column name
export const columns: ColumnDef<Payment>[] = [
  // checkbox
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // status
  {
    accessorKey: 'status',
    header: 'Status',
  },

  //   email
  {
    accessorKey: 'email',
    header: 'Email',
  },

  //   amount
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <button className="flex  items-center" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Amount
        <ArrowULeftUp className="ml-2 h-4 w-4" />
      </button>
    ),

    // modify column data
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))

      const formatted = new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
      }).format(amount)

      return <div className="text-center font-medium"> {formatted} </div>
    },
  },

  //   action
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      // access the row data
      const payment = row.original

      return (
        <Dropdown>
          <DropdownAction asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <ArrowDown className="h-4 w-4" />
            </Button>
          </DropdownAction>
          <DropdownContent align="end">
            {/* <DropdownLabel>Actions</DropdownLabel> */}
            <DropdownItem onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</DropdownItem>
            <Divider />
            <DropdownItem>View customer</DropdownItem>
            <DropdownItem>View payment details</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
    },
  },
]
