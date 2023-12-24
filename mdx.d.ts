import { ReactElement } from 'react'

declare module '*.mdx' {
  // eslint-disable-next-line no-unused-vars
  let MDXComponent: (props: any) => ReactElement
  export default MDXComponent
}
