"use client";
import { Avatar, Badge, Button, Table } from "@/src/components";
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline } from "phosphor-react";

const TransactionsTable = () => {
  return (
    <div
      id="tableScrollBar"
      className="w-full overflow-x-auto rounded-lg shadow-xl"
    >
      <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-2xl font-semibold text-slate-600">
                Cash Out Transactions
              </p>
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
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Date
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[160px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Amount
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Status
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Received Date
          </Table.HeadCell>
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
                      img="/images/company/paypal.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Paypal
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$652.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/Visa.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Visa
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
              <p className="text-xs font-normal text-slate-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$534.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/stripe.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Stripe
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Mar 12, 2023</p>
              <p className="text-xs font-normal text-slate-500">4:00 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$123.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/western.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Western Union
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Nov 23, 2023</p>
              <p className="text-xs font-normal text-slate-500">5:30 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$434.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/mastercard.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Mastercard
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Apr 23, 2023</p>
              <p className="text-xs font-normal text-slate-500">7:30 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$786.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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

const TransactionsTableCode = `
"use client";
import { Avatar,Badge,Button,Table } from "keep-react";
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline } from "phosphor-react";

const TransactionsTable = () => {
  return (
    <div
      id="tableScrollBar"
      className="w-full overflow-x-auto rounded-lg shadow-xl"
    >
      <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-2xl font-semibold text-slate-600">
                Cash Out Transactions
              </p>
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
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Date
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[160px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Amount
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Status
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Received Date
          </Table.HeadCell>
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
                      img="/images/company/paypal.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Paypal
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$652.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/Visa.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Visa
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 10, 2023</p>
              <p className="text-xs font-normal text-slate-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$534.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/stripe.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Stripe
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Mar 12, 2023</p>
              <p className="text-xs font-normal text-slate-500">4:00 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$123.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/western.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Western Union
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Nov 23, 2023</p>
              <p className="text-xs font-normal text-slate-500">5:30 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$434.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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
                      img="/images/company/mastercard.png"
                      size="md"
                    />
                    <div>
                      <p className="-mb-0.5 text-base font-medium text-slate-600">
                        Mastercard
                      </p>
                      <span className="text-xs font-normal text-slate-500">
                        Withdraw
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Apr 23, 2023</p>
              <p className="text-xs font-normal text-slate-500">7:30 pm</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">$786.00</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-sm font-medium text-slate-500">Jan 19, 2022</p>
              <p className="text-xs font-normal text-slate-500">3:45 pm</p>
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

export default TransactionsTable;

`;
export { TransactionsTable, TransactionsTableCode };
