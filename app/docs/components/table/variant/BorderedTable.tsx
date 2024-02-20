'use client'
import Image from 'next/image'
import { ArrowDown, Cube, DotsThreeOutline } from 'phosphor-react'
import { DefaultTableData } from '~/public/data/tableData'
import { Avatar, Badge, Button, Table } from '../../../../src'

const BorderedTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true} showBorder={true} showBorderPosition="right" striped={true} hoverable={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Team member</p>
              <Badge size="sm">100 Member</Badge>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <Cube size={20} className="pr-1" />
                New member
              </Button>
              <Button variant="outline" size="sm">
                <Cube size={20} className="pr-1" />
                Search
              </Button>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-5 font-medium text-metal-400">Type</p>
          </Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {DefaultTableData.map((cell) => (
            <Table.Row className="bg-white" key={cell.id}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar img={cell.img} />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{cell.name}</p>
                        <span>{cell.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                {cell.status ? (
                  <Badge color="success" showIcon={true}>
                    Active
                  </Badge>
                ) : (
                  <Badge color="secondary" showIcon={true}>
                    Offline
                  </Badge>
                )}
              </Table.Cell>
              <Table.Cell>{cell.position}</Table.Cell>
              <Table.Cell>{cell.email}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-1">
                  {cell.tags.map((tag, index, arr) =>
                    index === arr.length - 1 ? (
                      <Badge key={tag} color="secondary">
                        {tag}
                      </Badge>
                    ) : (
                      <Badge key={tag}>{tag}</Badge>
                    ),
                  )}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <div>
                    <Image src="/images/icon/Series.png" width={72} height={36} alt="line" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <ArrowDown size={20} color="#D7DFE9" />
                    </span>
                    <span>{cell.performance}%</span>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Button variant="outline" size="sm" shape="circle">
                  <DotsThreeOutline size={15} />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const BorderedTableCode = `
'use client'
import Image from 'next/image'
import { Avatar, Badge, Button, Popover, Table } from 'keep-react'
import { ArrowDown, Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react'

export const TableComponent = () => {
  return (
    <Table showCheckbox={true} showBorder={true} showBorderPosition="right" striped={true} hoverable={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Team member</p>
            <Badge size="sm" color="secondary">
              100 Member
            </Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" size="sm">
              <Cube size={20} className='pr-1' />
              New member
            </Button>
            <Button variant="outline" size="sm">
              <Cube size={20} className='pr-1' />
              Search
            </Button>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[290px]">
          <p className="text-body-5 font-medium text-metal-400">Type</p>
        </Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
        <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
        <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
        <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar img="/images/avatar/avatar-4.png"/>
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Ralph Edwards</p>
                    <span>&ralph</span>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <Badge color="success" showIcon={true}>
              Active
            </Badge>
          </Table.Cell>
          <Table.Cell>
            <p>UI/UX Designer</p>
          </Table.Cell>
          <Table.Cell>nevaeh.simmons@example.com</Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-1">
              <Badge>Product</Badge>
              <Badge>Marketing</Badge>
              <Badge>+3</Badge>
            </div>
          </Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div>
                <Image src="/images/icon/Series.png" width={72} height={36} alt="line" />
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <ArrowDown size={20} color="#D7DFE9" />
                </span>
                <span>20%</span>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline" size="sm" shape="circle">
              <DotsThreeOutline size={15} />
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
`
export { BorderedTable, BorderedTableCode }
