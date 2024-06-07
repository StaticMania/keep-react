import Link from 'next/link'

const Content = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-heading-3 font-bold text-metal-900 dark:text-white">{title}</h1>
      <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis eaque ipsum aperiam magni commodi
        natus repudiandae nobis officia vero voluptates illum tenetur blanditiis vitae dolores esse! Aspernatur, tempora
        tempore.
      </p>
      <Link
        href="/"
        className="inline-block text-body-4 font-medium text-metal-600 underline underline-offset-4 dark:text-metal-300">
        Learn More
      </Link>
    </>
  )
}

export { Content }
