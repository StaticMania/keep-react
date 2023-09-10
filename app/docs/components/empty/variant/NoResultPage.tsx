"use client";
import { Empty } from "~/src";

const NoResultPage = () => {
  return (
    <Empty
      title="Sorry, no result found!"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_result_1"
    />
  );
};

const NoResultPageCode = `
"use client";
import { Empty } from "keep-react";

const NoResultPage = () => {
  return (
    <Empty
      title="Sorry, no result found!"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_result_1"
    />
  );
};

export default NoResultPage;

`;

export { NoResultPage, NoResultPageCode };
