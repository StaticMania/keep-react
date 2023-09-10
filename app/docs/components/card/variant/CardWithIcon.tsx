"use client";
import { Button, Card } from "~/src";
import {
  ArchiveTray,
  CaretRight,
  DotsThreeVertical,
  PencilCircle,
} from "phosphor-react";

const CardWithIcon = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* ===CARD ONE=== */}
      <Card className="p-6 max-w-xl">
        <Card.Container className="flex items-start md:gap-5 gap-3.5">
          <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 md:p-4 p-2.5">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep design system</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD TWO=== */}
      <Card className="p-6 max-w-xl">
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-center gap-5">
            <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 md:p-4 p-2.5">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep design system</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more
                productive by providing them with a ready-made set of components
                to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <DotsThreeVertical
              size={24}
              color="#5E718D"
              className="flex cursor-pointer items-start"
            />
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD THREE=== */}
      <Card className="md:p-6 p-5 max-w-[280px]">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep design system</Card.Title>
          <Card.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary" customClass="hidden md:block">
            Check this
          </Button>
          <Button type="outlinePrimary" size="sm" customClass="md:hidden block">
            Check this
          </Button>
        </Card.Container>
      </Card>
    </div>
  );
};

const CardWithIconCode = `
import { Button,Card } from "keep-react";
import {
  ArchiveTray,
  CaretRight,
  DotsThreeVertical,
  PencilCircle,
} from "phosphor-react";

const CardWithIcon = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* ===CARD ONE=== */}
      <Card className="p-6 max-w-xl">
        <Card.Container className="flex items-start md:gap-5 gap-3.5">
          <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 md:p-4 p-2.5">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep design system</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD TWO=== */}
      <Card className="p-6 max-w-xl">
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-center gap-5">
            <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 md:p-4 p-2.5">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep design system</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more
                productive by providing them with a ready-made set of components
                to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <DotsThreeVertical
              size={24}
              color="#5E718D"
              className="flex cursor-pointer items-start"
            />
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD THREE=== */}
      <Card className="md:p-6 p-5 max-w-[240px]">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep design system</Card.Title>
          <Card.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary" customClass="hidden md:block">
            Check this
          </Button>
          <Button type="outlinePrimary" size="sm" customClass="md:hidden block">
            Check this
          </Button>
        </Card.Container>
      </Card>
    </div>
  );
};

export default CardWithIcon;
`;

export { CardWithIcon, CardWithIconCode };
