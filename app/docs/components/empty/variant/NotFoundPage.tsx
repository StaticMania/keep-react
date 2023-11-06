"use client";
import Image from "next/image";
import { Empty } from "~/src";

const NotFoundPage = () => {
  return (
    <Empty
      title="404 Not Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      buttonText="Go To Home Page"
      redirectBtnSize="md"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  );
};

const NotFoundPageCode = `
"use client";
import Image from "next/image";
import { Empty } from "keep-react";

export const EmptyComponent = () => {
  return (
    <Empty
      title="404 Not Found"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      buttonText="Go To Home Page"
      redirectBtnSize="md"
      redirectUrl="/"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  );
}
`;

export { NotFoundPage, NotFoundPageCode };
