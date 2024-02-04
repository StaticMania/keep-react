import type { Meta, StoryObj } from '@storybook/react'
import {
  ArrowDown,
  ArrowsDownUp,
  CalendarBlank,
  Cube,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutline,
  Flag,
  Spinner,
  Tag,
} from 'phosphor-react'
import { Table } from '.'
import { removeFragment } from '../../helpers/mergeDeep'
import { Avatar } from '../Avatar/Avatar'
import { Badge } from '../Badge'
import { Button } from '../Button/Button'

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { disable: true },
      description: 'Children is table content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    showCheckbox: {
      description: 'Table checkbox show Or Not?',
      control: { type: 'boolean' },
    },
    striped: {
      description: 'Table Striped Or Not?',
      control: { type: 'boolean' },
    },
    hoverable: {
      description: 'Table hoverable Or Not?',
      control: { type: 'boolean' },
    },
    showBorder: {
      description: 'Table border show Or Not?',
      control: { type: 'boolean' },
    },
    icon: {
      control: { disable: true },
      description: 'Table header icon',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    theme: {
      control: { disable: true },
      description: 'Table Theme',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Available Icon Position',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' },
      },
    },
    showBorderPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Available border Position',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const DefaultTable: Story = {
  args: {
    showCheckbox: true,
    striped: false,
    hoverable: false,
    showBorder: false,
    children: removeFragment(
      <>
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
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/avatar/avatar-1.png" size="md" />

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
                <Badge color="primary">Product</Badge>
                <Badge color="primary">Marketing</Badge>
                <Badge color="secondary">+3</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
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
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/avatar/avatar-2.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Wade Warren</p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge color="secondary" showIcon={true}>
                Offline
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Scrum Master</p>
            </Table.Cell>
            <Table.Cell>curtis.weaver@example.com</Table.Cell>

            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge color="primary">Product</Badge>
                <Badge color="primary">Marketing</Badge>
                <Badge color="secondary">+3</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
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
            </Table.Cell>
            <Table.Cell>
              <div className="">
                <Button variant="outline" size="xs" circle>
                  <span>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </span>
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/avatar/avatar-3.png" size="md" />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Eleanor Pena</p>
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
              <p>Software Tester</p>
            </Table.Cell>
            <Table.Cell>nathan.roberts@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge color="primary">Product</Badge>
                <Badge color="primary">Marketing</Badge>
                <Badge color="secondary">+3</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/icon/Series.png" alt="line" />
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <ArrowDown size={20} color="#D7DFE9" />
                  </span>

                  <span>30%</span>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/avatar/avatar-4.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Jerome Bell</p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge color="secondary" showIcon={true}>
                Offline
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>JS Developer</p>
            </Table.Cell>
            <Table.Cell>arif.jsdev@example.com</Table.Cell>

            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge color="primary">Javascript</Badge>
                <Badge color="primary">React</Badge>
                <Badge color="secondary">+7</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/icon/Series.png" alt="line" />
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <ArrowDown size={20} color="#D7DFE9" />
                  </span>

                  <span>50%</span>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/avatar/avatar-5.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Macky Scheman</p>
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
              <p>Web Developer</p>
            </Table.Cell>
            <Table.Cell>macky.jsdev@example.com</Table.Cell>

            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge color="primary">Adobe</Badge>
                <Badge color="primary">Figma</Badge>
                <Badge color="secondary">+6</Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/icon/Series.png" alt="line" />
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <ArrowDown size={20} color="#D7DFE9" />
                  </span>

                  <span>40%</span>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>,
    ),
  },
}
export const CashOutTransitionTable: Story = {
  args: {
    children: removeFragment(
      <>
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
          <Table.HeadCell className="min-w-[100px]"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/company/paypal.png" size="md" />

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
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/company/Visa.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Visa</p>
                      <span className="text-body-6 font-normal text-metal-500">Withdraw</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$534.00</p>
            </Table.Cell>

            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/company/stripe.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Stripe</p>
                      <span className="text-body-6 font-normal text-metal-500">Withdraw</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Mar 12, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">4:00 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$123.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/company/western.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Western Union</p>
                      <span className="text-body-6 font-normal text-metal-500">Withdraw</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Nov 23, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">5:30 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$434.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/company/mastercard.png" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Mastercard</p>
                      <span className="text-body-6 font-normal text-metal-500">Withdraw</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Apr 23, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">7:30 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$786.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>,
    ),
    showCheckbox: true,
  },
}
export const OrdersTable: Story = {
  args: {
    showCheckbox: true,
    children: removeFragment(
      <>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Orders</p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
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
          <Table.HeadCell className="min-w-[302px]">
            <p className="text-body-6 font-medium text-metal-400">Order no.</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[165px]"
            icon={<CalendarBlank size={14} color="#8897AE" />}
            iconPosition="left">
            Date
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[124px]" icon={<Flag size={14} color="#8897AE" />} iconPosition="left">
            Country
          </Table.HeadCell>

          <Table.HeadCell className="min-w-[152px]" icon={<Spinner size={14} color="#8897AE" />} iconPosition="left">
            State
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[114px]" icon={<DotsNine size={14} color="#8897AE" />} iconPosition="left">
            Quant.
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[138px]"
            icon={<CurrencyDollar size={14} color="#8897AE" />}
            iconPosition="left">
            Total Price
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[150px]" icon={<Tag size={14} color="#8897AE" />} iconPosition="left">
            Location
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">DL - 19266755</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <img src="/images/icon/country-0.svg" alt="country" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">285 Great North Road, Grey Lynn.</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">DL - 34233451</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 23, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <img src="/images/icon/country-1.svg" alt="country" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">6</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$13,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">19 Great North Road, Grey Lynn</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">DL - 19266567</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 31, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">5:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <img src="/images/icon/country-2.svg" alt="country" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="secondary" iconPosition="left">
                  Pending
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">8</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$24,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">19 Great North Road, Grey Lynn</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">DL - 19266755</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <img src="/images/icon/country-5.svg" alt="country" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">9</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$82,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">686 Great South Road, Manukau</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">DL - 19264155</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 07, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">02:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <img src="/images/icon/country-4.svg" alt="country" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="secondary" iconPosition="left">
                  Pending
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">20 Poland Road, Wairau Valley</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">DL - 19266755</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <img src="/images/icon/country-5.svg" alt="country" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge color="success" iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">285 Great North Road, Grey Lynn.</p>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>,
    ),
  },
}
export const FileUploadedTable: Story = {
  args: {
    showCheckbox: true,
    children: removeFragment(
      <>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Files uploaded</p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
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
          <Table.HeadCell className="min-w-[344px]">
            <p className="text-body-6 font-medium text-metal-400">File no.</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[160px]">File size</Table.HeadCell>
          <Table.HeadCell className="min-w-[171px]">Date uploaded</Table.HeadCell>
          <Table.HeadCell className="min-w-[170px]">Last uploaded</Table.HeadCell>
          <Table.HeadCell className="min-w-[300px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/icon/file.svg" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                      <p className="text-body-6 font-normal text-metal-500">200 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Total 0.2 MB</p>
              <p className="text-body-6 font-normal text-metal-500">200 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
            </Table.Cell>

            <Table.Cell>
              <Avatar.Group>
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" />
                <Avatar shape="circle" size="md" />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/icon/file.svg" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                      <p className="text-body-6 font-normal text-metal-500">700 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Total 0.7 MB</p>
              <p className="text-body-6 font-normal text-metal-500">700 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 12, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">4:12 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 15, 2023</p>
            </Table.Cell>

            <Table.Cell>
              <Avatar.Group>
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" />
                <Avatar shape="circle" size="md" />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/icon/file.svg" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                      <p className="text-body-6 font-normal text-metal-500">500 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Total 0.5 MB</p>
              <p className="text-body-6 font-normal text-metal-500">500 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Nov 23, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">02:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Nov 10, 2023</p>
            </Table.Cell>

            <Table.Cell>
              <Avatar.Group>
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" />
                <Avatar shape="circle" size="md" />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/icon/file.svg" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                      <p className="text-body-6 font-normal text-metal-500">900 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Total 0.9 MB</p>
              <p className="text-body-6 font-normal text-metal-500">900 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Feb 21, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 10, 2023</p>
            </Table.Cell>

            <Table.Cell>
              <Avatar.Group>
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" />
                <Avatar shape="circle" size="md" />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img="/images/icon/file.svg" size="md" />

                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Static Next Plan.pdf</p>
                      <p className="text-body-6 font-normal text-metal-500">200 KB</p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Total 0.1 MB</p>
              <p className="text-body-6 font-normal text-metal-500">100 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Mar 25, 2023</p>
              <p className="text-body-6 font-normal text-metal-500">8:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Apr 10, 2023</p>
            </Table.Cell>

            <Table.Cell>
              <Avatar.Group>
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" />
                <Avatar shape="circle" size="md" />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="xs" circle>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>,
    ),
  },
}
export const StripedTable: Story = {
  args: {
    ...DefaultTable.args,
    striped: true,
  },
}
export const HoverableTable: Story = {
  args: {
    ...DefaultTable.args,
    hoverable: true,
  },
}
export const BorderedTable: Story = {
  args: {
    ...DefaultTable.args,
    hoverable: true,
    showBorder: true,
    showBorderPosition: 'right',
    striped: true,
  },
}
