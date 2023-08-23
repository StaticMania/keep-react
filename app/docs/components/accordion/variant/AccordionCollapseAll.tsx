"use client";
import { Accordion } from "@/src/components/Accordion";

const AccordionCollapseAll = () => {
  return (
    <Accordion collapseAll={true}>
      <Accordion.Panel>
        <Accordion.Title>Is there a free version available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Check out this guide to learn how to and start developing websites
            even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            officia laudantium est atque qui illum voluptatibus nam placeat,
            dolores eaque ut id quisquam. Veniam, nulla at quos rem laudantium
            ullam?
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis
            voluptatibus, illo nostrum fugit inventore.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Keep Design System and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Keep Design
            System are open source under the MIT license, whereas Tailwind UI is
            a paid product. Another difference is that keep Design relies on
            smaller and standalone components, whereas Tailwind UI offers
            sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both keep Design, keep Design
            Pro, and even Tailwind UI as there is no technical reason stopping
            you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://keep Design.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                keep Design Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionCollapseAllCode = `
"use client"
import { Accordion } from "keep-design";

const AccordionCollapseAll = () => {
  return (
    <Accordion collapseAll={true}>
      <Accordion.Panel>
        <Accordion.Title>Is there a free version available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            Check out this guide to learn how to and start developing websites
            even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            officia laudantium est atque qui illum voluptatibus nam placeat,
            dolores eaque ut id quisquam. Veniam, nulla at quos rem laudantium
            ullam?
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis
            voluptatibus, illo nostrum fugit inventore.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Keep Design System and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Keep Design
            System are open source under the MIT license, whereas Tailwind UI is
            a paid product. Another difference is that keep Design relies on
            smaller and standalone components, whereas Tailwind UI offers
            sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both keep Design, keep Design
            Pro, and even Tailwind UI as there is no technical reason stopping
            you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://keep Design.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                keep Design Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordionCollapseAll;
`;

export { AccordionCollapseAll, AccordionCollapseAllCode };
