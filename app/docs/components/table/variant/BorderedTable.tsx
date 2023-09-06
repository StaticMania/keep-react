"use client";
import Image from "next/image";
import { Avatar, Badge, Button, Table } from "@/src/components";
import { ArrowDown, Cube, DotsThreeOutline } from "phosphor-react";

const BorderedTable = () => {
  return (
    <div
      id="tableScrollBar"
      className=" w-full overflow-x-auto rounded-lg shadow-xl"
    >
      <Table
        showCheckbox={true}
        showBorder={true}
        showBorderPosition="right"
        striped={true}
        hoverable={true}
      >
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-2xl font-semibold text-slate-600">
                Team member
              </p>
              <Badge size="xs" colorType="light" color="gray">
                100 Member
              </Badge>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
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
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-xs font-medium text-slate-400">Type</p>
          </Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">
            Email Address
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
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
                      img="/images/avatar/avatar-4.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Ralph Edwards
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>UI/UX Designer</p>
            </Table.Cell>
            <Table.Cell>nevaeh.simmons@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Product
                </Badge>
                <Badge colorType="light" color="info">
                  Marketing
                </Badge>
                <Badge colorType="light" color="gray">
                  +3
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                      img="/images/avatar/avatar-2.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Wade Warren
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="gray" dot={true}>
                Offline
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Scrum Master</p>
            </Table.Cell>
            <Table.Cell>curtis.weaver@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Product
                </Badge>
                <Badge colorType="light" color="info">
                  Marketing
                </Badge>
                <Badge colorType="light" color="gray">
                  +3
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                <Button type="outlineGray" size="xs" circle={true}>
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
                    <Avatar
                      shape="round"
                      img="/images/avatar/avatar-3.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Eleanor Pena
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Software Tester</p>
            </Table.Cell>
            <Table.Cell>nathan.roberts@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Product
                </Badge>
                <Badge colorType="light" color="info">
                  Marketing
                </Badge>
                <Badge colorType="light" color="gray">
                  +3
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                      img="/images/avatar/avatar-4.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Jerome Bell
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="gray" dot={true}>
                Offline
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>JS Developer</p>
            </Table.Cell>
            <Table.Cell>arif.jsdev@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Javascript
                </Badge>
                <Badge colorType="light" color="info">
                  React
                </Badge>
                <Badge colorType="light" color="gray">
                  +7
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                      img="/images/avatar/avatar-5.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Macky Scheman
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Web Developer</p>
            </Table.Cell>
            <Table.Cell>macky.jsdev@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Adobe
                </Badge>
                <Badge colorType="light" color="info">
                  Figma
                </Badge>
                <Badge colorType="light" color="gray">
                  +6
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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

const BorderedTableCode = `
"use client";
import { Avatar,Badge,Button,Table } from "keep-react";
import { ArrowDown, Cube, DotsThreeOutline } from "phosphor-react";
import Image from "next/image";

const BorderedTable = () => {
  return (
    <div
      id="tableScrollBar"
      className=" w-full overflow-x-auto rounded-lg shadow-xl"
    >
      <Table  
            showCheckbox={true}
            showBorder={true}
            showBorderPosition="right"
            striped={true}
            hoverable={true}
        >
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-2xl font-semibold text-slate-600">
                Team member
              </p>
              <Badge size="xs" colorType="light" color="gray">
                100 Member
              </Badge>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
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
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-xs font-medium text-slate-400">Type</p>
          </Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">
            Email Address
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
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
                      img="/images/avatar/avatar-4.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Ralph Edwards
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>UI/UX Designer</p>
            </Table.Cell>
            <Table.Cell>nevaeh.simmons@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Product
                </Badge>
                <Badge colorType="light" color="info">
                  Marketing
                </Badge>
                <Badge colorType="light" color="gray">
                  +3
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                      img="/images/avatar/avatar-2.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Wade Warren
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="gray" dot={true}>
                Offline
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Scrum Master</p>
            </Table.Cell>
            <Table.Cell>curtis.weaver@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Product
                </Badge>
                <Badge colorType="light" color="info">
                  Marketing
                </Badge>
                <Badge colorType="light" color="gray">
                  +3
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                <Button type="outlineGray" size="xs" circle={true}>
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
                    <Avatar
                      shape="round"
                      img="/images/avatar/avatar-3.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Eleanor Pena
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Software Tester</p>
            </Table.Cell>
            <Table.Cell>nathan.roberts@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Product
                </Badge>
                <Badge colorType="light" color="info">
                  Marketing
                </Badge>
                <Badge colorType="light" color="gray">
                  +3
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                      img="/images/avatar/avatar-4.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Jerome Bell
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="gray" dot={true}>
                Offline
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>JS Developer</p>
            </Table.Cell>
            <Table.Cell>arif.jsdev@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Javascript
                </Badge>
                <Badge colorType="light" color="info">
                  React
                </Badge>
                <Badge colorType="light" color="gray">
                  +7
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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
                      img="/images/avatar/avatar-5.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Macky Scheman
                      </p>
                      <span>&ralph</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Badge colorType="light" color="success" dot={true}>
                Active
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <p>Web Developer</p>
            </Table.Cell>
            <Table.Cell>macky.jsdev@example.com</Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-1">
                <Badge colorType="light" color="info">
                  Adobe
                </Badge>
                <Badge colorType="light" color="info">
                  Figma
                </Badge>
                <Badge colorType="light" color="gray">
                  +6
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/images/icon/Series.png"
                    width={72}
                    height={36}
                    alt="line"
                  />
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

export default BorderedTable;
`;
export { BorderedTable, BorderedTableCode };
