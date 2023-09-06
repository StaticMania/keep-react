"use client";
import { Empty } from "@/src/components";

const NoDataFound = () => {
  return (
    <Empty
      title="No Data Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="not_found_folder"
      buttonText="Go Back"
    />
  );
};

const NoDataFoundCode = `
"use client";
import { Empty } from "keep-react";

const NoDataFound = () => {
  return (
    <Empty
      title="No Data Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="not_found_folder"
      buttonText="Go Back"
    />
  );
};

export default NoDataFound;
`;

export { NoDataFound, NoDataFoundCode };
