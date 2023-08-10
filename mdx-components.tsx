import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="group relative z-20 text-2xl font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-[''] "
        {...props}
      >
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-primary-700 !opacity-0 transition-opacity group-hover:opacity-100"
        >
          #
        </a>
      </h2>
    ),
    h3: (props) => (
      <h3 className="group relative z-10 text-2xl font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-[''] ">
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100"
        >
          #
        </a>
      </h3>
    ),
    ...components,
  };
}
