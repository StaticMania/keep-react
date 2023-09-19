"use client";
import { Card } from "~/src";
import { CaretRight } from "phosphor-react";

const DefaultCard = () => {
  return (
    <Card className="md:p-6 p-5 max-w-lg">
      <Card.Title>Keep React</Card.Title>
      <Card.Description>
        Component design systems can help developers to be more productive by
        providing them with a ready-made set of components to use.
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
import { Card } from "keep-react";
import { CaretRight } from "phosphor-react";

const DefaultCard = () => {
  return (
    <Card className="md:p-6 p-5 max-w-lg">
      <Card.Title>Keep React</Card.Title>
      <Card.Description>
        Component design systems can help developers to be more productive by
        providing them with a ready-made set of components to use.
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
