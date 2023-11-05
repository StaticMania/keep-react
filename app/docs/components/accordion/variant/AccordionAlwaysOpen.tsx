"use client";
import { Accordion } from "~/src";

const AccordionAlwaysOpen = () => {
  return (
    <Accordion collapseAll={false} alwaysOpen={true}>
      <Accordion.Panel>
        <Accordion.Title>
          What is the purpose of the Keep React?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React is a collection of UI components, styles, and
            guidelines that ensure consistency and a unified user experience
            across our products. It simplifies the design and development
            process by providing ready-to-use components that can be easily
            customized and integrated into various applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          How do I customize the color scheme of components?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React offers a range of color variants for components. To
            customize the color scheme, you can use the available color options
            such as gray,info,error,warning and success. Simply set the desired
            color variant as a prop when using the component, and it will
            reflect the chosen color.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Can I add additional content to notifications?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            Yes, the Notification component in the Keep React allows you to
            include extra content alongside the primary message. The
            additionalContent prop can be used to display supplementary
            information, such as buttons, links, or icons, within the
            notification to provide users with more context and options.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionAlwaysOpenCode = `
"use client";
import { Accordion } from "keep-react";

export const AccordionComponent = () => {
  return (
     <Accordion collapseAll={false} alwaysOpen={true}>
      <Accordion.Panel>
        <Accordion.Title>
          What is the purpose of the Keep React?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React is a collection of UI components, styles, and
            guidelines that ensure consistency and a unified user experience
            across our products. It simplifies the design and development
            process by providing ready-to-use components that can be easily
            customized and integrated into various applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          How do I customize the color scheme of components?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React offers a range of color variants for
            components. To customize the color scheme, you can use the available
            color options such as gray,info,error,warning and success. Simply
            set the desired color variant as a prop when using the component,
            and it will reflect the chosen color.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Can I add additional content to notifications?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            Yes, the Notification component in the Keep React allows you
            to include extra content alongside the primary message. The
            additionalContent prop can be used to display supplementary
            information, such as buttons, links, or icons, within the
            notification to provide users with more context and options.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
`;

export { AccordionAlwaysOpen, AccordionAlwaysOpenCode };
