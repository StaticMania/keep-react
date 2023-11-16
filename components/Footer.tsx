'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className={`bg-white shadow-small ${pathname === '/' ? '' : 'hidden'}`}>
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
          <div>
            <Link href="/" className="flex">
              <Image width="113" height="40" src="/images/keep.svg" alt="Keep React" />
            </Link>
            <p className="text-metal-700 mt-6 max-w-lg text-body-4 font-normal">
              Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile
              set of pre-designed UI components to build modern web applications.
            </p>
          </div>
          <div>
            <h4 className="text-metal-900 mb-3 text-body-4 font-medium uppercase">RESOURCES</h4>
            <ul className="text-metal-700 flex flex-col gap-3 text-body-4 font-normal">
              <li>
                <a href="https://github.com/StaticMania/keep-react" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/J2i6VhncmepyLt8OS7i0GQ/Keep-Design-System---Pro-Version---Preview?type=design&node-id=2411-87283&mode=design&t=sYkDt6aaEl1EGXgV-0"
                  target="_blank">
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-metal-100 border-t py-5 text-center">
        <p className="text-metal-900 text-body-4 font-normal">
          &copy;{new Date().getFullYear()} All Rights Reserved by{' '}
          <a href="https://staticmania.com/" target="_blank" className="font-medium">
            StaticMania
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
