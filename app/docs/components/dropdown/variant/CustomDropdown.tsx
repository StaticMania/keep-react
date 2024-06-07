import { Avatar, Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '../../../../src'

const dropdownData = [
  {
    id: 1,
    img: '/images/avatar/avatar-3.png',
    name: 'Khairul Islam Ridoy',
    title: 'UI/UX Designer',
  },
  {
    id: 2,
    img: '/images/avatar/avatar-1.png',
    name: 'Zakir Hossain',
    title: 'Web Designer',
  },
  {
    id: 3,
    img: '/images/avatar/avatar-2.png',
    name: 'Atique Hasan',
    title: 'CEO of StaticMania',
  },
  {
    id: 4,
    img: '/images/avatar/avatar-4.png',
    name: 'Kausar Ahamed Pial',
    title: 'CTO of StaticMania',
  },
  {
    id: 5,
    img: '/images/avatar/avatar-5.png',
    name: 'Md Ariful Islam',
    title: 'Web Developer',
  },
]

const CustomDropdown = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button color="secondary" size="xs">
          Dropdown
        </Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          {dropdownData.map((data) => (
            <DropdownItem key={data.id}>
              <div>
                <Avatar size="lg" color="secondary" img={data.img} />
              </div>
              <div>
                <p className="text-body-4 font-medium text-metal-900 dark:text-white">{data.name}</p>
                <p className="text-body-5 font-normal text-metal-400 dark:text-metal-500">{data.title}</p>
              </div>
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  )
}

const CustomDropdownCode = `
import { Avatar, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList ,Button } from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction>
        <Button color="secondary" size="xs">
          Dropdown
        </Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          {dropdownData.map((data) => (
            <DropdownItem key={data.id}>
              <div>
                <Avatar size="lg" color="secondary" img={data.img} />
              </div>
              <div>
                <p className="text-body-4 font-medium text-metal-900">{data.name}</p>
                <p className="text-body-5 font-normal text-metal-400">{data.title}</p>
              </div>
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  )
}

`

export { CustomDropdown, CustomDropdownCode }
