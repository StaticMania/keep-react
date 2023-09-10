"use client";
import { Breadcrumb } from "~/src";
import { CaretRight } from "phosphor-react";

const BreadcrumbWithBorder = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
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
        breadCrumbWithBorder={true}
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
        breadCrumbWithBorder={true}
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

const BreadcrumbWithBorderCode = `
"use client";
import { Breadcrumb } from "keep-react";
import { CaretRight } from "phosphor-react";

const BreadcrumbWithBorder = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
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
        breadCrumbWithBorder={true}
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
        breadCrumbWithBorder={true}
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

export default BreadcrumbWithBorder;
`;

export { BreadcrumbWithBorder, BreadcrumbWithBorderCode };
