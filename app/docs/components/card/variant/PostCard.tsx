"use client";
import Image from "next/image";
import { Badge, Card } from "~/src";
import { CaretRight } from "phosphor-react";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card className="relative max-w-xs overflow-hidden rounded-md">
        <Card.Container>
          <Image
            height={204}
            width={373}
            src="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
            alt="blog"
            className="brightness-50"
          />
        </Card.Container>
        <Card.Container className="absolute flex items-start py-3 px-5">
          <Card.Container>
            <Card.Title className="text-md md:text-xl font-medium text-white">
              Keep Design System
            </Card.Title>
            <Card.Description className="text-xs md:text-sm font-normal text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              excepturi quam incidunt tempora?
            </Card.Description>
            <Card.Link
              className="mt-3 flex items-center gap-1 text-xs md:text-sm font-normal text-white"
              href="/"
              icon={<CaretRight size={16} color="#fff" />}
              iconPosition="left"
            >
              Read More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="max-w-2xl border-none !bg-transparent">
        <Card.Container className="flex items-start border-none">
          <Card.Container>
            <Image
              height={600}
              width={200}
              src="https://images.prismic.io/staticmania/b6fe0b6c-5c0d-46a1-8ac6-68fe59d418c8_blog2.jpg?auto=compress,format"
              alt="blog"
              className="rounded-xl"
            />
          </Card.Container>
          <Card.Container className="md:px-6 px-3">
            <Card.Container className="inline-block">
              <Badge colorType="light" color="info" size="xs">
                Tips & Advice
              </Badge>
            </Card.Container>
            <Card.Title className="text-sm md:text-xl font-medium text-slate-700">
              Keep Design System
            </Card.Title>
            <Card.Description className="text-xs md:text-sm font-normal text-slate-500">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

const PostCardCode = `
"use client";
import Image from "next/image";
import { Badge, Card } from "keep-react";
import { CaretRight } from "phosphor-react";

export const CardComponent = () => {
  return (
    <>
      <Card className="relative max-w-xs overflow-hidden rounded-md">
        <Card.Container>
          <Image
            height={204}
            width={373}
            src="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
            alt="blog"
            className="brightness-50"
          />
        </Card.Container>
        <Card.Container className="absolute flex items-start py-3 px-5">
          <Card.Container>
            <Card.Title className="text-md md:text-xl font-medium text-white">
              Keep React
            </Card.Title>
            <Card.Description className="text-xs md:text-sm font-normal text-white">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              className="mt-3 flex items-center gap-1 text-xs md:text-sm font-normal text-white"
              href="/"
              icon={<CaretRight size={16} color="#fff" />}
              iconPosition="left"
            >
              Read More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="max-w-2xl border-none !bg-transparent">
        <Card.Container className="flex items-start border-none">
          <Card.Container>
            <Image
              height={600}
              width={200}
              src="https://images.prismic.io/staticmania/b6fe0b6c-5c0d-46a1-8ac6-68fe59d418c8_blog2.jpg?auto=compress,format"
              alt="blog"
              className="rounded-xl"
            />
          </Card.Container>
          <Card.Container className="md:px-6 px-3">
            <Card.Container className="inline-block">
              <Badge colorType="light" color="info" size="xs">
                Tips & Advice
              </Badge>
            </Card.Container>
            <Card.Title className="text-sm md:text-xl font-medium text-slate-700">
              Keep React
            </Card.Title>
            <Card.Description className="text-xs md:text-sm font-normal text-slate-500">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
`;

export { PostCard, PostCardCode };
