"use client";
import Image from "next/image";
import { Empty } from "~/src";

const NoDataFound = () => {
  return (
    <Empty
      title="No Data Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
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
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
      buttonText="Go Back"
    />
  );
};

export default NoDataFound;
`;

export { NoDataFound, NoDataFoundCode };
