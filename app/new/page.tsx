import { Breadcrumb } from './Breadcrumb/Breadcrumb'

const Page = () => {
  return (
    <section className="bg-white py-20">
      <div className="container space-y-5">
        <h1 className="mx-auto mb-10 text-center text-3xl font-bold">Breadcrumb component</h1>

        <Breadcrumb borderType="border-xy">
          <Breadcrumb.Item>Overview</Breadcrumb.Item>
          <Breadcrumb.Item>Pools</Breadcrumb.Item>
          <Breadcrumb.Item>Tokens</Breadcrumb.Item>
          <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb borderType="border-xy">
          <Breadcrumb.Item>Overview</Breadcrumb.Item>
          <Breadcrumb.Item>Pools</Breadcrumb.Item>
          <Breadcrumb.Item activeType="border">Color</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </section>
  )
}

export default Page
