'use client'
import { Heart } from 'phosphor-react'
import { Avatar, Card } from '~/src'

const ProfileCardWithCover = () => {
  return (
    <Card
      imgSrc="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
      imgSize="md"
      className="max-w-xs">
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="2xl" shape="circle" img="/images/avatar/avatar-4.png" />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-sm font-semibold text-slate-800 md:text-base">Khairul Islam</Card.Title>
          <Card.Title className="text-xs font-normal text-slate-400 md:font-medium">UI/UX Designer</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-slate-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-sm text-slate-400">Post</Card.Title>
            <Card.Title className="text-base font-semibold text-slate-800 md:text-3xl">254</Card.Title>
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-sm text-slate-400">Followers</Card.Title>
            <Card.Title className="text-base font-semibold text-slate-800 md:text-3xl">1245M</Card.Title>
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-sm text-slate-400">Following</Card.Title>
            <Card.Title className="text-base font-semibold text-slate-800 md:text-3xl">58</Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
  )
}

const ProfileCardWithCoverCode = `
"use client";
import { Heart } from "phosphor-react";
import { Avatar, Card } from "keep-react";

export const CardComponent = () => {
  return (
    <Card
      imgSrc="https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format"
      imgSize="md"
      className="max-w-xs"
    >
      <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="2xl" shape="circle" img="/images/avatar/avatar-4.png" />
        </Card.Container>
        <Card.Container className="mt-10 mb-3 text-center">
          <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
            Khairul Islam
          </Card.Title>
          <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
            UI/UX Designer
          </Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-slate-50 py-3 px-5">
          <Card.Container className="text-center">
            <Card.Title className="text-sm text-slate-400">Post</Card.Title>
            <Card.Title className="text-base md:text-3xl font-semibold text-slate-800">
              254
            </Card.Title>
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-sm text-slate-400">
              Followers
            </Card.Title>
            <Card.Title className="text-base md:text-3xl font-semibold text-slate-800">
              1245M
            </Card.Title>
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-sm text-slate-400">
              Following
            </Card.Title>
            <Card.Title className="text-base md:text-3xl font-semibold text-slate-800">
              58
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
  );
}
`
export { ProfileCardWithCover, ProfileCardWithCoverCode }
