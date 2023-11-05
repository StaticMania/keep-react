"use client";
import { Avatar, Card } from "~/src";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-5">
      {/*=== PROFILE CARD ONE=== */}
      <Card className="md:max-w-lg max-w-xs p-6">
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="lg"
            shape="circle"
            img="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Card.Container className="ml-3">
            <Card.Title className="md:text-base text-sm font-semibold text-slate-800">
              Md Ariful Islam
            </Card.Title>
            <Card.Title className="text-xs md:font-medium  font-normal text-slate-400">
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      {/*=== PROFILE CARD TWO=== */}
      <Card className="max-w-[250px] p-6">
        <Card.Container className="flex items-center justify-center">
          <Avatar
            shape="circle"
            img="https://randomuser.me/api/portraits/men/50.jpg"
            statusPosition="bottom-right"
            size="2xl"
          />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
            Khairul Islam Ridoy
          </Card.Title>
          <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
            UI/UX Designer
          </Card.Title>
        </Card.Container>
        <Card.Container className="mx-auto flex max-w-[220px] rounded-md items-center justify-center divide-x divide-slate-200 circleed border border-slate-200 p-1 md:p-2">
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
            href="#"
          />
        </Card.Container>
      </Card>
    </div>
  );
};

const ProfileCardCode = `
"use client";
import { Avatar,Card } from "keep-react";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export const CardComponent = () => {
  return (
    <>
      <Card className="md:max-w-lg max-w-xs p-6">
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar
            size="lg"
            shape="circle"
            img="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Card.Container className="ml-3">
            <Card.Title className="md:text-base text-sm font-semibold text-slate-800">
              Md Ariful Islam
            </Card.Title>
            <Card.Title className="text-xs md:font-medium  font-normal text-slate-400">
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="max-w-[250px] p-6">
        <Card.Container className="flex items-center justify-center">
          <Avatar
            shape="circle"
            img="https://randomuser.me/api/portraits/men/50.jpg"
            statusPosition="bottom-right"
            size="2xl"
          />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
            Khairul Islam Ridoy
          </Card.Title>
          <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
            UI/UX Designer
          </Card.Title>
        </Card.Container>
        <Card.Container className="mx-auto flex max-w-[220px] rounded-md items-center justify-center divide-x divide-slate-200 circleed border border-slate-200 p-1 md:p-2">
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<LinkedinLogo size={24} color="#0072b1" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<FacebookLogo size={24} color="#0C63D4" weight="fill" />}
            href="#"
          />
          <Card.Link
            className="flex items-center justify-center py-1 px-3"
            icon={<TwitterLogo size={24} color="#0C8BD9" weight="fill" />}
            href="#"
          />
        </Card.Container>
      </Card>
    </>
  );
};
`;

export { ProfileCard, ProfileCardCode };
