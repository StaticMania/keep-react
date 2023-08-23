"use client";
import { Empty } from "@/src/components/Empty";

const NotFoundPage = () => {
  return (
    <Empty
      title="404 Not Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="something_wrong_404"
    />
  );
};

const NotFoundPageCode = `
"use client";
import { Empty } from "keep-design";

const NotFoundPage = () => {
  return (
    <Empty
      title="404 Not Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="something_wrong_404"
    />
  );
};

export default NotFoundPage;
`;

export { NotFoundPage, NotFoundPageCode };
