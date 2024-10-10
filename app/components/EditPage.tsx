import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from '../src'

interface EditPageProps {
  pageLink: string
  nextPageName: string
  nextPageLink: string
}

const EditPage: FC<EditPageProps> = ({ pageLink, nextPageName, nextPageLink }) => {
  const githubPageLink = `https://github.com/StaticMania/keep-react/tree/main/app${pageLink}`
  return (
    <div className="my-12">
      <div className="flex items-center justify-between">
        <Link
          target="_blank"
          href={githubPageLink}
          className={buttonVariants({ variant: 'outline', color: 'secondary' })}>
          Edit this page
        </Link>
        <Link href={nextPageLink} className={buttonVariants({ variant: 'outline', color: 'secondary' })}>
          <span>{nextPageName}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 fill-metal-300 dark:fill-white"
              viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default EditPage
