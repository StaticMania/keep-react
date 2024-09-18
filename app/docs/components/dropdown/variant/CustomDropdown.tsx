import {
  Avatar,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
} from '../../../../src'

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
    <div className="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction asChild>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownArrow />
          {dropdownData.map((data) => (
            <DropdownItem key={data.id}>
              <div>
                <Avatar>
                  <AvatarImage src={data.img} />
                </Avatar>
              </div>
              <div>
                <p className="text-body-4 font-medium text-metal-900 dark:text-white">{data.name}</p>
                <p className="text-body-5 font-normal text-metal-400 dark:text-metal-500">{data.title}</p>
              </div>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

const CustomDropdownCode = {
  'DropdownComponent.tsx': `
import {
  Button,
  Avatar,
  AvatarImage,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          {dropdownData.map((data) => (
            <DropdownItem key={data.id}>
              <div>
                <Avatar>
                  <AvatarImage src={data.img} />
                </Avatar>
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
`,
}

export { CustomDropdown, CustomDropdownCode }
