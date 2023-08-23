"use client";
import { Avatar } from "@/src/components/Avatar/Avatar";
import { Card } from "@/src/components/Card";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col flex-wrap gap-5 items-center justify-center">
      {/*=== PROFILE CARD ONE=== */}
      <Card className="max-w-lg p-6">
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="lg"
            shape="round"
            img="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Card.Container className="ml-3">
            <Card.Title className="text-base font-semibold text-slate-800">
              Md Ariful Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>

      <div className="flex items-end gap-3 mt-10">
        {/*=== PROFILE CARD TWO=== */}
        <Card className="relative max-w-[320px] p-6">
          <Card.Container className="absolute inset-x-0 -top-14 flex items-center justify-center">
            <Avatar
              shape="round"
              img="https://randomuser.me/api/portraits/men/22.jpg"
              statusPosition="bottom-right"
              size="2xl"
              bordered={true}
            />
          </Card.Container>
          <Card.Container className="mt-6 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Ben Yamin
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              Software Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="mx-auto flex max-w-[220px] items-center justify-center divide-x divide-slate-200 rounded border border-slate-200 p-2">
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
              href="/"
            />
          </Card.Container>
        </Card>
        {/*=== PROFILE CARD THREE=== */}
        <Card className="max-w-[320px] p-6">
          <Card.Container className="flex items-center justify-center">
            <Avatar
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
              statusPosition="bottom-right"
              size="2xl"
            />
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam Ridoy
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="mx-auto flex max-w-[220px] items-center justify-center divide-x divide-slate-200 rounded border border-slate-200 p-2">
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
              href="/"
            />
          </Card.Container>
        </Card>
      </div>
    </div>
  );
};

const ProfileCardCode = `
"use client";
import { Avatar,Card } from "keep-design";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/*=== PROFILE CARD ONE=== */}
      <Card className="max-w-lg p-6">
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="lg"
            shape="round"
            img="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Card.Container className="ml-3">
            <Card.Title className="text-base font-semibold text-slate-800">
              Md Ariful Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>

      <div className="flex items-end gap-3 mt-10">
        {/*=== PROFILE CARD TWO=== */}
        <Card className="relative max-w-[320px] p-6">
          <Card.Container className="absolute inset-x-0 -top-14 flex items-center justify-center">
            <Avatar
              shape="round"
              img="https://randomuser.me/api/portraits/men/22.jpg"
              statusPosition="bottom-right"
              size="2xl"
              bordered={true}
            />
          </Card.Container>
          <Card.Container className="mt-6 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Ben Yamin
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              Software Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="mx-auto flex max-w-[220px] items-center justify-center divide-x divide-slate-200 rounded border border-slate-200 p-2">
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
              href="/"
            />
          </Card.Container>
        </Card>
        {/*=== PROFILE CARD THREE=== */}
        <Card className="max-w-[320px] p-6">
          <Card.Container className="flex items-center justify-center">
            <Avatar
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
              statusPosition="bottom-right"
              size="2xl"
            />
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam Ridoy
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="mx-auto flex max-w-[220px] items-center justify-center divide-x divide-slate-200 rounded border border-slate-200 p-2">
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
              href="/"
            />
            <Card.Link
              className="flex items-center justify-center py-1 px-3"
              icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
              href="/"
            />
          </Card.Container>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;
`;

export { ProfileCard, ProfileCardCode };
