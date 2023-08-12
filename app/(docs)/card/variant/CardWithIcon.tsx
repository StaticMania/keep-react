"use client";
import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
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
        <Card.Container className="flex items-start gap-5">
          <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep design system</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use. This
              can save time and effort, and it can also help to reduce the risk
              of errors.
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
            <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 p-4">
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
          <Card.Container className="flex items-start">
            <DotsThreeVertical
              size={28}
              color="#5E718D"
              className="flex cursor-pointer items-start"
            />
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD THREE=== */}
      <Card className="p-6 max-w-[280px]">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep design system</Card.Title>
          <Card.Description className="text-sm font-normal text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary">Check this</Button>
        </Card.Container>
      </Card>
    </div>
  );
};

const CardWithIconCode = `
import { Button,Card } from "keep-design";
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
        <Card.Container className="flex items-start gap-5">
          <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 p-4">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep design system</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use. This
              can save time and effort, and it can also help to reduce the risk
              of errors.
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
            <Card.Container className="flex items-center justify-center rounded-full bg-slate-50 p-4">
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
          <Card.Container className="flex items-start">
            <DotsThreeVertical
              size={28}
              color="#5E718D"
              className="flex cursor-pointer items-start"
            />
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===CARD THREE=== */}
      <Card className="p-6 max-w-[280px]">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep design system</Card.Title>
          <Card.Description className="text-sm font-normal text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary">Check this</Button>
        </Card.Container>
      </Card>
    </div>
  );
};

export default CardWithIcon;
`;

export { CardWithIcon, CardWithIconCode };
