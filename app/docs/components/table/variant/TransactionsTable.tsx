'use client'
import { ArrowsDownUp, Cube } from 'phosphor-react'
import { TransactionsTableData } from '~/public/data/tableData'
import { Avatar, Badge, Button, Table } from '../../../../src'
import TableActionBtn from './TableActionBtn'

const TransactionsTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <Table.Caption>
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
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">Type</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Date
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[160px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Amount
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[150px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Status
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
            Received Date
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {TransactionsTableData.map((cell) => (
            <Table.Row key={cell.id} className="bg-white">
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar img={cell.img} />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{cell.name}</p>
                        <span className="text-body-6 font-normal text-metal-500">{cell.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-6 font-normal text-metal-500">{cell.time}</p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">${cell.amount}</p>
              </Table.Cell>
              <Table.Cell>
                <div className="inline-block">
                  <Badge color="success">Delivered</Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">{cell.date}</p>
                <p className="text-body-6 font-normal text-metal-500">{cell.time}</p>
              </Table.Cell>
              <Table.Cell>
                <TableActionBtn />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const TransactionsTableCode = `
'use client'
import { Avatar, Badge, Button, Popover, Table } from 'keep-react'
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react'

export const TableComponent = () => {
  return (
    <Table showCheckbox={true}>
      <Table.Caption>
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
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[290px]">
          <p className="text-body-6 font-medium text-metal-400">Type</p>
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Date
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[160px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Amount
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[150px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Status
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
          Received Date
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar img="/images/company/paypal.png" />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Paypal</p>
                    <span className="text-body-6 font-normal text-metal-500">Withdraw</span>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">$652.00</p>
          </Table.Cell>
          <Table.Cell>
            <div className="inline-block">
              <Badge color="success">Delivered</Badge>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
            <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
              <Popover.Container className="!mt-0 !block">
                <ul>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Delete</span>
                      <span>
                        <Trash />
                      </span>
                    </button>
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-metal-100">
                    <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                      <span>Edit</span>
                      <span>
                        <Pencil />
                      </span>
                    </button>
                  </li>
                </ul>
              </Popover.Container>
              <Popover.Action>
                <Button variant="outline" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
`
export { TransactionsTable, TransactionsTableCode }
