"use client";
import { Breadcrumb } from "~/src";
import { CaretRight } from "phosphor-react";

const DefaultBreadcrumb = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

const DefaultBreadcrumbCode = `
"use client";
import { Breadcrumb } from "keep-react";
import { CaretRight } from "phosphor-react";

const DefaultBreadcrumb = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default DefaultBreadcrumb;
`;

export { DefaultBreadcrumb, DefaultBreadcrumbCode };
