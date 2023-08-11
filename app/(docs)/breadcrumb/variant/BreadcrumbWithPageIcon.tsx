"use client";
import { Breadcrumb } from "@/src/components/Breadcrumb";
import { CaretRight, House } from "phosphor-react";

const BreadcrumbWithPageIcon = () => {
  return (
    <div className="my-3 flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Breadcrumb Item
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="base">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Breadcrumb Item
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="border">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Breadcrumb Item
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Breadcrumb item</Breadcrumb.Item>
        <Breadcrumb.Item href="#">......</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active="bar">
          Breadcrumb item
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

const BreadcrumbWithPageIconCode = `
"use client";
import { Breadcrumb } from "keep-design";
import { CaretRight } from "phosphor-react";

const BreadcrumbWithPageIcon = () => {
  return (
   <div className="my-3 flex w-full flex-col gap-5">
  <Breadcrumb
    breadCrumbWithBorder={true}
    aria-label="Default breadcrumb example"
    separatorIcon={<CaretRight size={20} color="#AFBACA"/>}
  >
    <Breadcrumb.Item
      href="#"
      icon={<House size={24} color="#AFBACA"/>}
    >
      Breadcrumb Item
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      Breadcrumb item
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      ......
    </Breadcrumb.Item>
    <Breadcrumb.Item
      href="#"
      active="base"
    >
      Breadcrumb item
    </Breadcrumb.Item>
  </Breadcrumb>
  <Breadcrumb
    breadCrumbWithBorder={true}
    aria-label="Default breadcrumb example"
    separatorIcon={<CaretRight size={20} color="#AFBACA"/>}
  >
    <Breadcrumb.Item
      href="#"
      icon={<House size={24} color="#AFBACA"/>}
    >
      Breadcrumb Item
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      Breadcrumb item
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      ......
    </Breadcrumb.Item>
    <Breadcrumb.Item
      href="#"
      active="border"
    >
      Breadcrumb item
    </Breadcrumb.Item>
  </Breadcrumb>
  <Breadcrumb
    breadCrumbWithBorder={true}
    aria-label="Default breadcrumb example"
    separatorIcon={<CaretRight size={20} color="#AFBACA"/>}
  >
    <Breadcrumb.Item
      href="#"
      icon={<House size={24} color="#AFBACA"/>}
    >
      Breadcrumb Item
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      Breadcrumb item
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      ......
    </Breadcrumb.Item>
    <Breadcrumb.Item
      href="#"
      active="bar"
    >
      Breadcrumb item
    </Breadcrumb.Item>
  </Breadcrumb>
</div>
  );
};
export default BreadcrumbWithPageIcon;
`;

export { BreadcrumbWithPageIcon, BreadcrumbWithPageIconCode };
