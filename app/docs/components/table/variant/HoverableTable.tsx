'use client'
import { Avatar, Button, Table, Popover } from '~/src'
import { Cube, DotsThreeOutline, Trash, Pencil } from 'phosphor-react'

const HoverableTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true} hoverable={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Files uploaded</p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
              </Button>
              <Button variant="outlineGray" size="sm">
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
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 border border-metal-100 p-2"
                additionalContent={
                  <ul className="flex flex-col gap-1">
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
                }>
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
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
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 border border-metal-100 p-2"
                additionalContent={
                  <ul className="flex flex-col gap-1">
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
                }>
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
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
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 border border-metal-100 p-2"
                additionalContent={
                  <ul className="flex flex-col gap-1">
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
                }>
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
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
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 border border-metal-100 p-2"
                additionalContent={
                  <ul className="flex flex-col gap-1">
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
                }>
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
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
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 border border-metal-100 p-2"
                additionalContent={
                  <ul className="flex flex-col gap-1">
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
                }>
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const HoverableTableCode = `
"use client";
import { Avatar, Button, Table, Popover } from "keep-react";
import { Cube, DotsThreeOutline, Trash, Pencil } from "phosphor-react";

export const TableComponent = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true} hoverable={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Files uploaded
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
              </Button>
              <Button variant="outlineGray" size="sm">
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
          <Table.HeadCell className="min-w-[171px]">
            Date uploaded
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[170px]">
            Last uploaded
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[300px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-y divide-gray-25">
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      shape="circle"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-body-6 font-normal text-metal-500">
                        200 KB
                      </p>
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
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      shape="circle"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-body-6 font-normal text-metal-500">
                        700 KB
                      </p>
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
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      shape="circle"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-body-6 font-normal text-metal-500">
                        500 KB
                      </p>
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
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      shape="circle"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-body-6 font-normal text-metal-500">
                        900 KB
                      </p>
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
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      shape="circle"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-body-6 font-normal text-metal-500">
                        200 KB
                      </p>
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
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="circle"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="circle" size="md" stacked={true} />
                <Avatar shape="circle" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button variant="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
`

export { HoverableTable, HoverableTableCode }
