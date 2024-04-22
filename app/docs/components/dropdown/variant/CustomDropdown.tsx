'use client'
import { Avatar, Button, Dropdown } from '../../../../src'

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
    <Dropdown action={<Button>Dropdown</Button>} actionClassName="border-none">
      <Dropdown.List>
        {dropdownData.map((data) => (
          <Dropdown.Item key={data.id}>
            <div>
              <Avatar size="lg" color="secondary" img={data.img} />
            </div>
            <div>
              <p className="text-body-3 font-medium text-metal-800">{data.name}</p>
              <p className="text-body-4 font-normal text-metal-400">{data.title}</p>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  )
}

const CustomDropdownCode = `
'use client'
import { Avatar, Dropdown, Button } from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown action={<Button>Dropdown</Button>} actionClassName="border-none">
      <Dropdown.List>
        {dropdownData.map((data) => (
          <Dropdown.Item key={data.id}>
            <div>
              <Avatar size="lg" color="secondary" img={data.img} />
            </div>
            <div>
              <p className="text-body-3 font-medium text-metal-800">{data.name}</p>
              <p className="text-body-4 font-normal text-metal-400">{data.title}</p>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  )
}
`

export { CustomDropdown, CustomDropdownCode }
