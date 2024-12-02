'use client'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: Readonly<DataTableProps<TData, TValue>>) {
  // sorting
  const [sorting, setSorting] = useState<SortingState>([])

  //pagination
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0, //initial page index
    pageSize: 5, //default page size
  })

  //filtering
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  //   column visibility
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  //   all row checked
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    onColumnVisibilityChange: setColumnVisibility,

    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      pagination,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between">
        {/* filtering input  */}
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter emails..."
            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
        </div>

        {/* column visibility dropdown  */}
        <div className="space-x-2">
          <Dropdown>
            <DropdownAction asChild>
              <Button>Columns</Button>
            </DropdownAction>
            <DropdownContent>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownItem onClick={() => column.toggleVisibility()} key={column.id}>
                      {column.id}
                    </DropdownItem>
                  )
                })}
            </DropdownContent>
          </Dropdown>

          <Button
            onClick={() => {
              table.resetColumnVisibility(true)
            }}>
            Reset
          </Button>
        </div>
      </div>

      {/* main table  */}
      <div className="mb-3 rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* next and previous btn  */}
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="md" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>

        <Button variant="outline" size="md" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>

      {/* pagination dropdown  */}
      <div>
        <Dropdown>
          <DropdownAction asChild>
            <Button>Open Dropdown</Button>
          </DropdownAction>
          <DropdownContent>
            <DropdownItem onClick={() => setPagination({ pageIndex: 0, pageSize: 2 })}>2</DropdownItem>
            <DropdownItem onClick={() => setPagination({ pageIndex: 0, pageSize: 5 })}>5</DropdownItem>
            <DropdownItem onClick={() => setPagination({ pageIndex: 0, pageSize: 10 })}>10</DropdownItem>
            <DropdownItem onClick={() => setPagination({ pageIndex: 0, pageSize: 15 })}>15</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>

      <div className="flex-1 text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </div>
  )
}
