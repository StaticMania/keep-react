import { Divider } from './Divider'

const Page = () => {
  return (
    <section className="bg-white py-20">
      <div className="container space-y-3">
        <Divider color="primary" size="sm" />
        <Divider color="secondary" size="md" />
        <Divider color="success" size="lg" />
        <Divider color="warning" size="xl" />
        <Divider color="error" size="2xl" />

        <Divider color="secondary" size="md" className="my-10 block" />
        <div className="mt-10 space-y-3">
          <Divider color="error" size="xl" variant="start">
            Divider
          </Divider>
          <Divider color="error" size="xl" variant="center">
            Divider
          </Divider>
          <Divider color="error" size="xl" variant="end">
            Divider
          </Divider>
        </div>
      </div>
    </section>
  )
}

export default Page
