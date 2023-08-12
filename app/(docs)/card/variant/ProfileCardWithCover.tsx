"use client";

import { Avatar } from "@/src/components/Avatar/Avatar";
import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
import { Heart } from "phosphor-react";

const ProfileCardWithCover = () => {
  return (
    <div className="flex flex-wrap gap-5 items-end justify-center">
      {/* ===PROFILE CARD ONE=== */}
      <Card
        className="max-w-sm"
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      >
        <Card.Container className="flex items-center justify-between p-6">
          <Card.Container className="flex items-center ">
            <Avatar
              size="lg"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <Card.Container className="ml-3">
              <Card.Title className="text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </Card.Container>
          <Button size="sm" type="outlineGray">
            View Profile
          </Button>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD TWO=== */}
      <Card
        className="max-w-[320px]"
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center p-6">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
          </Card.Container>
          <Card.Container className="mt-6 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD THREE=== */}
      <Card
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
          </Card.Container>
          <Card.Container className="mt-10 mb-3 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex w-full justify-between border-t border-t-slate-50 py-3 px-5">
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">Post</Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                254
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">
                Followers
              </Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                12,45M
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">
                Following
              </Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                58
              </Card.Title>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD FOUR=== */}
      <Card
        className="max-w-sm"
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <Avatar
              size="lg"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <Card.Container className="ml-3">
              <Card.Title className="text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </div>
          <Card.Title className="text-2xl font-semibold text-slate-800">
            $00.00
          </Card.Title>
        </div>
      </Card>
    </div>
  );
};

const ProfileCardWithCoverCode = `
"use client";
import { Avatar,Button,Card } from "keep-design";

const ProfileCardWithCover = () => {
  return (
    <div className="flex flex-wrap gap-5 items-end justify-center">
      {/* ===PROFILE CARD ONE=== */}
      <Card
        className="max-w-sm"
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      >
        <Card.Container className="flex items-center justify-between p-6">
          <Card.Container className="flex items-center ">
            <Avatar
              size="lg"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <Card.Container className="ml-3">
              <Card.Title className="text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </Card.Container>
          <Button size="sm" type="outlineGray">
            View Profile
          </Button>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD TWO=== */}
      <Card
        className="max-w-[320px]"
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center p-6">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
          </Card.Container>
          <Card.Container className="mt-6 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD THREE=== */}
      <Card
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
          </Card.Container>
          <Card.Container className="mt-10 mb-3 text-center">
            <Card.Title className="text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex w-full justify-between border-t border-t-slate-50 py-3 px-5">
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">Post</Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                254
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">
                Followers
              </Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                12,45M
              </Card.Title>
            </Card.Container>
            <Card.Container className="text-center">
              <Card.Title className="text-sm text-slate-400">
                Following
              </Card.Title>
              <Card.Title className="text-3xl font-semibold text-slate-800">
                58
              </Card.Title>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD FOUR=== */}
      <Card
        className="max-w-sm"
        imgSrc="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <Avatar
              size="lg"
              shape="round"
              img="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <Card.Container className="ml-3">
              <Card.Title className="text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </div>
          <Card.Title className="text-2xl font-semibold text-slate-800">
            $00.00
          </Card.Title>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCardWithCover;

`;

export { ProfileCardWithCover, ProfileCardWithCoverCode };
