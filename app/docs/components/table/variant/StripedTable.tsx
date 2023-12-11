'use client'
import { Avatar, Button, Popover, Table } from '~/src'
import { Cube, DotsThreeOutline, Pencil, Trash } from 'phosphor-react'

const StripedTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true} striped={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Files uploaded</p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
              </Button>
              <Button type="outlineGray" size="sm">
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
          <Table.HeadCell className="min-w-[100px]" />
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
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
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
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover.Action>
              </Popover>
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
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
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
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover.Action>
              </Popover>
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
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
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
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover.Action>
              </Popover>
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
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
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
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover.Action>
              </Popover>
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
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
                <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
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
                  <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button>
                </Popover.Action>
              </Popover>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const StripedTableCode = `
"use client";
import { Avatar, Button, Popover, Table } from "keep-react";
import { Cube, DotsThreeOutline, Pencil, Trash } from "phosphor-react";

export const TableComponent = () => {
  return (
    <Table showCheckbox={true} striped={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Files uploaded</p>
          </div>
          <div className="flex items-center gap-5">
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <Cube size={24} />
              </span>
              Filter
            </Button>
            <Button type="outlineGray" size="sm">
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
        <Table.HeadCell className="min-w-[100px]" />
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
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
              <Avatar shape="circle" size="md" stacked={true} />
              <Avatar shape="circle" size="md" stacked={true} />
            </Avatar.Group>
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
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
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
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
              <Avatar shape="circle" size="md" stacked={true} />
              <Avatar shape="circle" size="md" stacked={true} />
            </Avatar.Group>
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
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
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
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
              <Avatar shape="circle" size="md" stacked={true} />
              <Avatar shape="circle" size="md" stacked={true} />
            </Avatar.Group>
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
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
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
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
              <Avatar shape="circle" size="md" stacked={true} />
              <Avatar shape="circle" size="md" stacked={true} />
            </Avatar.Group>
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
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover.Action>
            </Popover>
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
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-1.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-2.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-3.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-4.png" />
              <Avatar shape="circle" size="md" stacked={true} img="/images/avatar/avatar-5.png" />
              <Avatar shape="circle" size="md" stacked={true} />
              <Avatar shape="circle" size="md" stacked={true} />
            </Avatar.Group>
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
                <Button type="outlineGray" size="xs" circle={true}>
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

export { StripedTable, StripedTableCode }
