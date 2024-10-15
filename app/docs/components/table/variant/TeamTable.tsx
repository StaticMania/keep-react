'use client'
import { DotsThreeOutlineVertical, MagnifyingGlass, Plus } from 'phosphor-react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
import { data4 } from '../TableApi'

const TeamTable = () => {
  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Team Members</h2>
            <Badge color="secondary">200 Member</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" className="gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              New Member
            </Button>
            <Button variant="outline" className="gap-1.5">
              <MagnifyingGlass className="size-4 fill-metal-900 dark:fill-white" />
              Search
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
            <div className="w-[200px]">Members</div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Performance</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data4.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={item.user.img} />
                  <AvatarFallback>{item.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-body-4 font-medium">{item.user.name}</p>
                  <p className="text-body-5 font-normal">{item.user.position}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge color={item.status === 'Active' ? 'success' : 'error'}>{item.status}</Badge>
            </TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                {item.team.map((t, i) => (
                  <Badge key={t} color={i % 2 === 0 ? 'primary' : 'success'}>
                    {t}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <img src={item.performance} alt="performance" />
            </TableCell>

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

const TeamTableCode = {
  'TableComponent.tsx': `
'use client'
import { DotsThreeOutlineVertical, MagnifyingGlass, Plus } from 'phosphor-react'
import {
  Avatar,
  AvatarImage,
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
} from 'keep-react'

export const TableComponent = () => {
  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Team Members</h2>
            <Badge color="secondary">200 Member</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" className="gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              New Member
            </Button>
            <Button variant="outline" className="gap-1.5">
              <MagnifyingGlass className="size-4 fill-metal-900 dark:fill-white" />
              Search
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
            <div className="w-[200px]">Members</div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Performance</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={item.user.img} />
                  <AvatarFallback>KR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-body-4 font-medium">{item.user.name}</p>
                  <p className="text-body-5 font-normal">{item.user.position}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge showIcon className="text-body-4" color={item.status === 'Active' ? 'success' : 'error'}>
                {item.status}
              </Badge>
            </TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                {item.team.map((t, i) => (
                  <Badge
                    key={t}
                    showIcon={i + 1 !== item.team.length}
                    size="md"
                    className="text-body-4"
                    color={i % 2 === 0 ? 'primary' : 'success'}>
                    {t}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <img src={item.performance} alt="performance" />
            </TableCell>

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
    user: {
      img: '/images/avatar/avatar-1.png',
      name: 'Robert Fox',
      position: 'Software Engineer',
    },
    status: 'Active',
    role: 'Manager',
    email: 'robert@staticmania.com',
    team: ['Product', 'Marketing', '+3'],
    performance: '/images/series/series-1.svg',
  },
  {
    id: 2,
    user: {
      img: '/images/avatar/avatar-2.png',
      name: 'Jane Doe',
      position: 'UI/UX Designer',
    },
    status: 'Inactive',
    role: 'Designer',
    email: 'jane@staticmania.com',
    team: ['Design', 'Development', '+2'],
    performance: '/images/series/series-2.svg',
  },
  {
    id: 3,
    user: {
      img: '/images/avatar/avatar-3.png',
      name: 'John Smith',
      position: 'Backend Developer',
    },
    status: 'Active',
    role: 'CTO',
    email: 'john@staticmania.com',
    team: ['Development', 'Operations', '+4'],
    performance: '/images/series/series-3.svg',
  },
  {
    id: 4,
    user: {
      img: '/images/avatar/avatar-4.png',
      name: 'Alice Johnson',
      position: 'Project Manager',
    },
    status: 'Inactive',
    role: 'Manager',
    email: 'alice@staticmania.com',
    team: ['Project Management', 'HR', '+1'],
    performance: '/images/series/series-4.svg',
  },
  {
    id: 5,
    user: {
      img: '/images/avatar/avatar-5.png',
      name: 'Michael Brown',
      position: 'Data Scientist',
    },
    status: 'Active',
    role: 'Data Analyst',
    email: 'michael@staticmania.com',
    team: ['Data Science', 'Marketing', '+2'],
    performance: '/images/series/series-5.svg',
  },
]
  `,
}
export { TeamTable, TeamTableCode }
