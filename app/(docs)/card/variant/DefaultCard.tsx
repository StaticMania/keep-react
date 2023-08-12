"use client";
import { Card } from "@/src/components/Card";
import { CaretRight } from "phosphor-react";

const DefaultCard = () => {
  return (
    <Card className="p-6 max-w-lg">
      <Card.Title>Keep design system</Card.Title>
      <Card.Description>
        Component design systems can help developers to be more productive by
        providing them with a ready-made set of components to use. This can save
        time and effort, and it can also help to reduce the risk of errors.
      </Card.Description>
      <Card.Link
        href="/"
        icon={<CaretRight size={16} color="#1B4DFF" />}
        iconPosition="left"
      >
        Learn More
      </Card.Link>
    </Card>
  );
};

const DefaultCardCode = `
"use client";
import { Card } from "keep-design";
import { CaretRight } from "phosphor-react";

const DefaultCard = () => {
  return (
    <Card className="p-6 max-w-lg">
      <Card.Title>Keep design system</Card.Title>
      <Card.Description>
        Component design systems can help developers to be more productive by
        providing them with a ready-made set of components to use. This can save
        time and effort, and it can also help to reduce the risk of errors.
      </Card.Description>
      <Card.Link
        href="/"
        icon={<CaretRight size={16} color="#1B4DFF" />}
        iconPosition="left"
      >
        Learn More
      </Card.Link>
    </Card>
  );
};

export default DefaultCard;
`;

export { DefaultCard, DefaultCardCode };
