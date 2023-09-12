"use client";
import Image from "next/image";
import { Empty } from "~/src";

const EmptyFolder = () => {
  return (
    <Empty
      title="This folder has gone missing"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  );
};

const EmptyFolderCode = `
"use client";
import { Empty } from "keep-react";

const EmptyFolder = () => {
  return (
    <Empty
      title="This folder has gone missing"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      image={
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  );
};

export default EmptyFolder;
`;

export { EmptyFolder, EmptyFolderCode };
