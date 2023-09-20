"use client";
import { Avatar, Button, Table } from "~/src";
import { Cube, DotsThreeOutline } from "phosphor-react";

const FilesUploadedTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-2xl font-semibold text-slate-600">
                Files uploaded
              </p>
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
            <p className="text-xs font-medium text-slate-400">File no.</p>
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
                      shape="round"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-xs font-normal text-slate-500">
                        200 KB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Total 0.2 MB</p>
              <p className="text-xs font-normal text-slate-500">200 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
              <p className="text-xs font-normal text-slate-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
            </Table.Cell>
            <Table.Cell>
              <Avatar.Group>
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="round" size="md" stacked={true} />
                <Avatar shape="round" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button type="outlineGray" size="xs" circle={true}>
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
                    <Avatar
                      shape="round"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-xs font-normal text-slate-500">
                        700 KB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Total 0.7 MB</p>
              <p className="text-xs font-normal text-slate-500">700 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 12, 2023</p>
              <p className="text-xs font-normal text-slate-500">4:12 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 15, 2023</p>
            </Table.Cell>
            <Table.Cell>
              <Avatar.Group>
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="round" size="md" stacked={true} />
                <Avatar shape="round" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button type="outlineGray" size="xs" circle={true}>
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
                    <Avatar
                      shape="round"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-xs font-normal text-slate-500">
                        500 KB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Total 0.5 MB</p>
              <p className="text-xs font-normal text-slate-500">500 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Nov 23, 2023</p>
              <p className="text-xs font-normal text-slate-500">02:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Nov 10, 2023</p>
            </Table.Cell>
            <Table.Cell>
              <Avatar.Group>
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="round" size="md" stacked={true} />
                <Avatar shape="round" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button type="outlineGray" size="xs" circle={true}>
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
                    <Avatar
                      shape="round"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-xs font-normal text-slate-500">
                        900 KB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Total 0.9 MB</p>
              <p className="text-xs font-normal text-slate-500">900 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Feb 21, 2023</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
            </Table.Cell>
            <Table.Cell>
              <Avatar.Group>
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="round" size="md" stacked={true} />
                <Avatar shape="round" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button type="outlineGray" size="xs" circle={true}>
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
                    <Avatar
                      shape="round"
                      img="/images/icon/file.svg"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Static Next Plan.pdf
                      </p>
                      <p className="text-xs font-normal text-slate-500">
                        200 KB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Total 0.1 MB</p>
              <p className="text-xs font-normal text-slate-500">100 KB</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Mar 25, 2023</p>
              <p className="text-xs font-normal text-slate-500">8:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Apr 10, 2023</p>
            </Table.Cell>
            <Table.Cell>
              <Avatar.Group>
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-1.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-2.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-3.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-4.png"
                />
                <Avatar
                  shape="round"
                  size="md"
                  stacked={true}
                  img="/images/avatar/avatar-5.png"
                />
                <Avatar shape="round" size="md" stacked={true} />
                <Avatar shape="round" size="md" stacked={true} />
              </Avatar.Group>
            </Table.Cell>
            <Table.Cell>
              <Button type="outlineGray" size="xs" circle={true}>
                <span>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </span>
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

const FilesUploadedTableCode = `
"use client";
import { Avatar,Button,Table } from "keep-react";
import { Cube, DotsThreeOutline } from "phosphor-react";

const FilesUploadedTable = () => {
  return (
    <Table showCheckbox={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-2xl font-semibold text-slate-600">
              Files uploaded
            </p>
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
          <p className="text-xs font-medium text-slate-400">File no.</p>
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[160px]">File size</Table.HeadCell>
        <Table.HeadCell className="min-w-[171px]">Date uploaded</Table.HeadCell>
        <Table.HeadCell className="min-w-[170px]">Last uploaded</Table.HeadCell>
        <Table.HeadCell className="min-w-[300px]">Team</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]" />
      </Table.Head>
      <Table.Body className="divide-y divide-gray-25">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar shape="round" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-base font-medium text-slate-600">
                      Static Next Plan.pdf
                    </p>
                    <p className="text-xs font-normal text-slate-500">200 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Total 0.2 MB</p>
            <p className="text-xs font-normal text-slate-500">200 KB</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
            <p className="text-xs font-normal text-slate-500">4:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
          </Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-1.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-2.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-3.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-4.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-5.png"
              />
              <Avatar shape="round" size="md" stacked={true} />
              <Avatar shape="round" size="md" stacked={true} />
            </Avatar.Group>
          </Table.Cell>
          <Table.Cell>
            <Button type="outlineGray" size="xs" circle={true}>
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
                  <Avatar shape="round" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-base font-medium text-slate-600">
                      Static Next Plan.pdf
                    </p>
                    <p className="text-xs font-normal text-slate-500">700 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Total 0.7 MB</p>
            <p className="text-xs font-normal text-slate-500">700 KB</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Jan 12, 2023</p>
            <p className="text-xs font-normal text-slate-500">4:12 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Jan 15, 2023</p>
          </Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-1.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-2.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-3.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-4.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-5.png"
              />
              <Avatar shape="round" size="md" stacked={true} />
              <Avatar shape="round" size="md" stacked={true} />
            </Avatar.Group>
          </Table.Cell>
          <Table.Cell>
            <Button type="outlineGray" size="xs" circle={true}>
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
                  <Avatar shape="round" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-base font-medium text-slate-600">
                      Static Next Plan.pdf
                    </p>
                    <p className="text-xs font-normal text-slate-500">500 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Total 0.5 MB</p>
            <p className="text-xs font-normal text-slate-500">500 KB</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Nov 23, 2023</p>
            <p className="text-xs font-normal text-slate-500">02:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Nov 10, 2023</p>
          </Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-1.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-2.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-3.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-4.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-5.png"
              />
              <Avatar shape="round" size="md" stacked={true} />
              <Avatar shape="round" size="md" stacked={true} />
            </Avatar.Group>
          </Table.Cell>
          <Table.Cell>
            <Button type="outlineGray" size="xs" circle={true}>
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
                  <Avatar shape="round" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-base font-medium text-slate-600">
                      Static Next Plan.pdf
                    </p>
                    <p className="text-xs font-normal text-slate-500">900 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Total 0.9 MB</p>
            <p className="text-xs font-normal text-slate-500">900 KB</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Feb 21, 2023</p>
            <p className="text-xs font-normal text-slate-500">3:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
          </Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-1.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-2.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-3.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-4.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-5.png"
              />
              <Avatar shape="round" size="md" stacked={true} />
              <Avatar shape="round" size="md" stacked={true} />
            </Avatar.Group>
          </Table.Cell>
          <Table.Cell>
            <Button type="outlineGray" size="xs" circle={true}>
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
                  <Avatar shape="round" img="/images/icon/file.svg" size="md" />
                  <div>
                    <p className="-mb-0.5 text-base font-medium text-slate-600">
                      Static Next Plan.pdf
                    </p>
                    <p className="text-xs font-normal text-slate-500">200 KB</p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Total 0.1 MB</p>
            <p className="text-xs font-normal text-slate-500">100 KB</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Mar 25, 2023</p>
            <p className="text-xs font-normal text-slate-500">8:45 pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-sm font-medium text-slate-500">Apr 10, 2023</p>
          </Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-1.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-2.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-3.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-4.png"
              />
              <Avatar
                shape="round"
                size="md"
                stacked={true}
                img="/images/avatar/avatar-5.png"
              />
              <Avatar shape="round" size="md" stacked={true} />
              <Avatar shape="round" size="md" stacked={true} />
            </Avatar.Group>
          </Table.Cell>
          <Table.Cell>
            <Button type="outlineGray" size="xs" circle={true}>
              <span>
                <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
              </span>
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default FilesUploadedTable;

`;
export { FilesUploadedTable, FilesUploadedTableCode };
