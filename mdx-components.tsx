import type { MDXComponents } from 'mdx/types'

// eslint-disable-next-line no-unused-vars
export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    h2: (props) => (
      <h2
        className="section-title group z-10 before:invisible before:block before:content-[''] xl:before:-mt-24 xl:before:h-32 2xl:before:-mt-48 2xl:before:h-[244px]"
        {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-metal-500 opacity-0 transition-opacity group-hover:opacity-100">
          #
        </a>
      </h2>
    ),
    h3: (props) => (
      <h3
        className="group relative z-10 text-body-1 font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-[''] before:dark:text-white"
        {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500">
          #
        </a>
      </h3>
    ),
    ...components,
  }
}
