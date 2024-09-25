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
  DropdownList,
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
                <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
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
                <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
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

`,
}
export { TeamTable, TeamTableCode }
