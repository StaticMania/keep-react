"use client";
import { Empty } from "~/src";

const NotFound = () => {
  return (
    <Empty
      title="Sorry, No Result Found!"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_result_1"
    />
  );
};

export default NotFound;
