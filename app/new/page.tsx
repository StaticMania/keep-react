import { Avatar } from './Avatar'

const Page = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="container space-y-5">
        <h1 className="mx-auto mb-10 text-center text-3xl font-bold">Server component</h1>
        <div className="flex items-end gap-4">
          <Avatar size="xl" color="primary" shape="rounded" active verified />
          <Avatar size="xl" color="secondary" shape="rounded" active verified />
          <Avatar size="xl" color="success" shape="circle" active verified imgUrl="/images/avatar/avatar-3.png" />
          <Avatar size="xl" color="warning" shape="circle" active verified imgUrl="/images/avatar/avatar-3.png" />
          <Avatar size="xl" color="error" shape="circle" active verified imgUrl="/images/avatar/avatar-3.png" />
        </div>

        <Avatar.Group>
          <Avatar size="xl" color="primary" shape="circle" imgUrl="/images/avatar/avatar-3.png" />
          <Avatar size="xl" color="primary" shape="circle" imgUrl="/images/avatar/avatar-3.png" />
          <Avatar size="xl" color="primary" shape="circle" imgUrl="/images/avatar/avatar-3.png" />
          <Avatar size="xl" color="primary" shape="circle" imgUrl="/images/avatar/avatar-3.png" />
          <Avatar.Counter size="xl">+99</Avatar.Counter>
        </Avatar.Group>
      </div>
    </section>
  )
}

export default Page
