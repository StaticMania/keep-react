"use client";
import { Heart } from "phosphor-react";
import { Avatar, Button, Card } from "~/src";

const ProfileCardWithCover = () => {
  return (
    <div className="flex flex-wrap gap-5 items-end ">
      {/* ===PROFILE CARD ONE=== */}
      <Card className="max-w-sm" imgSrc="/images/banner/blog.jpg">
        <Card.Container className="flex md:flex-row flex-col space-y-3 md:items-center items-start justify-between p-6">
          <Card.Container className="flex items-center">
            <Avatar size="lg" shape="round" img="/images/avatar/avatar-4.png" />
            <Card.Container className="ml-3">
              <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </Card.Container>
          <Button size="xs" type="outlineGray">
            View Profile
          </Button>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD TWO=== */}
      <Card className="max-w-xs" imgSrc="/images/banner/blog.jpg" imgSize="md">
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center p-6">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="/images/avatar/avatar-4.png"
            />
          </Card.Container>
          <Card.Container className="mt-6 text-center">
            <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD THREE=== */}
      <Card imgSrc="/images/banner/blog.jpg" imgSize="md">
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="/images/avatar/avatar-4.png"
            />
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
      {/* ===PROFILE CARD FOUR=== */}
      <Card className="max-w-sm" imgSrc="/images/banner/blog.jpg">
        <div className="flex items-center justify-between p-3 md:p-6">
          <div className="flex items-center">
            <Avatar size="lg" shape="round" img="/images/avatar/avatar-4.png" />
            <Card.Container className="ml-3">
              <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </div>
          <Card.Title className="text-base md:text-2xl font-semibold text-slate-800">
            $00.00
          </Card.Title>
        </div>
      </Card>
    </div>
  );
};

const ProfileCardWithCoverCode = `
"use client";
import { Avatar,Button,Card } from "keep-react";

const ProfileCardWithCover = () => {
  return (
    <div className="flex flex-wrap gap-5 items-end ">
      {/* ===PROFILE CARD ONE=== */}
      <Card className="max-w-sm" imgSrc="/images/banner/blog.jpg">
        <Card.Container className="flex items-center justify-between p-6">
          <Card.Container className="flex items-center ">
            <Avatar size="lg" shape="round" img="/images/avatar/avatar-4.png" />
            <Card.Container className="ml-3">
              <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </Card.Container>
          <Button size="xs" type="outlineGray">
            View Profile
          </Button>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD TWO=== */}
      <Card className="max-w-xs" imgSrc="/images/banner/blog.jpg" imgSize="md">
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center p-6">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="/images/avatar/avatar-4.png"
            />
          </Card.Container>
          <Card.Container className="mt-6 text-center">
            <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
              Khairul Islam
            </Card.Title>
            <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
              UI/UX Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* ===PROFILE CARD THREE=== */}
      <Card imgSrc="/images/banner/blog.jpg" imgSize="md">
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar
              size="2xl"
              shape="round"
              img="/images/avatar/avatar-4.png"
            />
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
      {/* ===PROFILE CARD FOUR=== */}
      <Card className="max-w-sm" imgSrc="/images/banner/blog.jpg">
        <div className="flex items-center justify-between p-3 md:p-6">
          <div className="flex items-center">
            <Avatar size="lg" shape="round" img="/images/avatar/avatar-4.png" />
            <Card.Container className="ml-3">
              <Card.Title className="text-sm md:text-base font-semibold text-slate-800">
                Khairul Islam
              </Card.Title>
              <Card.Title className="text-xs font-normal md:font-medium text-slate-400">
                UI/UX Designer
              </Card.Title>
            </Card.Container>
          </div>
          <Card.Title className="text-base md:text-2xl font-semibold text-slate-800">
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
