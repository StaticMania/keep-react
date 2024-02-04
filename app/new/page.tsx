import { Badge } from './Badge'

const page = () => {
  return (
    <section className=" py-20">
      <div className="container flex gap-x-5">
        <Badge>Badges</Badge>
        <Badge color="secondary">Badges</Badge>
        <Badge color="success">Badges</Badge>
        <Badge color="warning">Badges</Badge>
        <Badge color="error">Badges</Badge>
      </div>
    </section>
  )
}

export default page
