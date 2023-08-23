"use client";
import { Breadcrumb } from "@/src/components/Breadcrumb";
import { CaretRight } from "phosphor-react";

const DefaultBreadcrumb = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Breadcrumb Item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Breadcrumb Item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border">Breadcrumb item</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Breadcrumb Item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar">Breadcrumb item</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

const DefaultBreadcrumbCode = `
"use client";
import { Breadcrumb } from "keep-design";
import { CaretRight } from "phosphor-react";

const DefaultBreadcrumb = () => {
  return (
     <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Breadcrumb Item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Breadcrumb Item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border">Breadcrumb item</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Breadcrumb Item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar">Breadcrumb item</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default DefaultBreadcrumb;
`;

export { DefaultBreadcrumb, DefaultBreadcrumbCode };
