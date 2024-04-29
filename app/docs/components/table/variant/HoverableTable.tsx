'use client'
import Image from 'next/image'
import { ArrowDown, Cube, DotsThreeOutline } from 'phosphor-react'
import { DefaultTableData } from '~/public/data/tableData'
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

const HoverableTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true} hoverable={true}>
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Team member</p>
              <Badge size="sm" color="secondary">
                100 Member
              </Badge>
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
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell className="min-w-[152px]">Role</TableHeadCell>
          <TableHeadCell className="min-w-[240px]">Email Address</TableHeadCell>
          <TableHeadCell className="min-w-[215px]">Team</TableHeadCell>
          <TableHeadCell className="min-w-[200px]">Performance</TableHeadCell>
          <TableHeadCell className="min-w-[100px]" />
        </TableHead>
        <TableBody className="divide-gray-25 divide-y">
          {DefaultTableData.map((cell) => (
            <TableRow className="bg-white" key={cell.id}>
              <TableCell>
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
              </TableCell>
              <TableCell>
                {cell.status ? (
                  <Badge color="success" showIcon={true}>
                    Active
                  </Badge>
                ) : (
                  <Badge color="secondary" showIcon={true}>
                    Offline
                  </Badge>
                )}
              </TableCell>
              <TableCell>{cell.position}</TableCell>
              <TableCell>{cell.email}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {cell.tags.map((tag, index, arr) =>
                    index === arr.length - 1 ? (
                      <Badge key={tag} color="secondary">
                        {tag}
                      </Badge>
                    ) : (
                      <Badge key={tag} color="primary">
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>
              </TableCell>
              <TableCell>
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

const HoverableTableCode = `
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
import { ArrowDown, Cube, DotsThreeOutline } from 'phosphor-react'

export const TableComponent = () => {
  return (
    <Table showCheckbox={true} hoverable={true}>
      <TableCaption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Team member</p>
             <Badge size="sm" color="secondary">
                100 Member
              </Badge>
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
        <TableHeadCell>Status</TableHeadCell>
        <TableHeadCell className="min-w-[152px]">Role</TableHeadCell>
        <TableHeadCell className="min-w-[240px]">Email Address</TableHeadCell>
        <TableHeadCell className="min-w-[215px]">Team</TableHeadCell>
        <TableHeadCell className="min-w-[200px]">Performance</TableHeadCell>
        <TableHeadCell className="min-w-[100px]" />
      </TableHead>
      <TableBody className="divide-gray-25 divide-y">
        <TableRow className="bg-white">
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar img="/images/avatar/avatar-4.png" />
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Ralph Edwards</p>
                    <span>&ralph</span>
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <Badge color="success" showIcon={true}>
              Active
            </Badge>
          </TableCell>
          <TableCell>
            <p>UI/UX Designer</p>
          </TableCell>
          <TableCell>nevaeh.simmons@example.com</TableCell>
          <TableCell>
            <div className="flex items-center gap-1">
              <Badge color="info">
                Product
              </Badge>
              <Badge color="info">
                Marketing
              </Badge>
              <Badge color="secondary">
                +3
              </Badge>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-3">
              <div>
                <img src="/images/icon/Series.png" alt="line" />
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <ArrowDown size={20} color="#D7DFE9" />
                </span>
                <span>20%</span>
              </div>
            </div>
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

export { HoverableTable, HoverableTableCode }
