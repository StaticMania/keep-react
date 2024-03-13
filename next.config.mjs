/** @type {import('next').NextConfig} */
import mdx from '@next/mdx'
import slug from 'rehype-slug'
import tableOfContents from 'remark-toc'
const nextConfig = {
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/introduction',
        destination: '/docs/getting-started/Introduction',
        permanent: true,
      },
      {
        source: '/installation',
        destination: '/docs/getting-started/Installation',
        permanent: true,
      },
      {
        source: '/alert',
        destination: '/docs/components/alert',
        permanent: true,
      },
      {
        source: '/avatar',
        destination: '/docs/components/avatar',
        permanent: true,
      },
      {
        source: '/avatarGroup',
        destination: '/docs/components/avatarGroup',
        permanent: true,
      },
      {
        source: '/accordion',
        destination: '/docs/components/accordion',
        permanent: true,
      },
      {
        source: '/button',
        destination: '/docs/components/button',
        permanent: true,
      },
      {
        source: '/buttonGroup',
        destination: '/docs/components/buttonGroup',
        permanent: true,
      },
      {
        source: '/badge',
        destination: '/docs/components/badge',
        permanent: true,
      },
      {
        source: '/breadcrumb',
        destination: '/docs/components/breadcrumb',
        permanent: true,
      },
      {
        source: '/card',
        destination: '/docs/components/card',
        permanent: true,
      },
      {
        source: '/carousel',
        destination: '/docs/components/carousel',
        permanent: true,
      },
      {
        source: '/playButton',
        destination: '/docs/components/playButton',
        permanent: true,
      },
      {
        source: '/progress',
        destination: '/docs/components/progress',
        permanent: true,
      },
      {
        source: '/notification',
        destination: '/docs/components/notification',
        permanent: true,
      },
      {
        source: '/tooltip',
        destination: '/docs/components/tooltip',
        permanent: true,
      },
      {
        source: '/modal',
        destination: '/docs/components/modal',
        permanent: true,
      },
      {
        source: '/rating',
        destination: '/docs/components/rating',
        permanent: true,
      },
      {
        source: '/spinner',
        destination: '/docs/components/spinner',
        permanent: true,
      },
      {
        source: '/toast',
        destination: '/docs/components/toast',
        permanent: true,
      },
      {
        source: '/slider',
        destination: '/docs/components/slider',
        permanent: true,
      },
      {
        source: '/tabs',
        destination: '/docs/components/tabs',
        permanent: true,
      },
      {
        source: '/sidebar',
        destination: '/docs/components/sidebar',
        permanent: true,
      },
      {
        source: '/switch',
        destination: '/docs/components/switch',
        permanent: true,
      },
      {
        source: '/skeleton',
        destination: '/docs/components/skeleton',
        permanent: true,
      },
      { source: '/tag', destination: '/docs/components/tag', permanent: true },
      {
        source: '/table',
        destination: '/docs/components/table',
        permanent: true,
      },
      {
        source: '/step',
        destination: '/docs/components/step',
        permanent: true,
      },
      {
        source: '/timeline',
        destination: '/docs/components/timeline',
        permanent: true,
      },
      {
        source: '/empty',
        destination: '/docs/components/empty',
        permanent: true,
      },
      {
        source: '/statistic',
        destination: '/docs/components/statistic',
        permanent: true,
      },
      {
        source: '/upload',
        destination: '/docs/components/upload',
        permanent: true,
      },
      {
        source: '/dropdown',
        destination: '/docs/components/dropdown',
        permanent: true,
      },
      {
        source: '/checkbox',
        destination: '/docs/components/checkbox',
        permanent: true,
      },
      {
        source: '/textInput',
        destination: '/docs/components/textInput',
        permanent: true,
      },
      {
        source: '/radio',
        destination: '/docs/components/radio',
        permanent: true,
      },
      {
        source: '/textArea',
        destination: '/docs/components/textArea',
        permanent: true,
      },
      {
        source: '/numberInput',
        destination: '/docs/components/numberInput',
        permanent: true,
      },
      {
        source: '/searchBar',
        destination: '/docs/components/searchBar',
        permanent: true,
      },
      {
        source: '/datePicker',
        destination: '/docs/components/datePicker',
        permanent: true,
      },
      {
        source: '/checkboxGroup',
        destination: '/docs/components/checkboxGroup',
        permanent: true,
      },
      {
        source: '/tree',
        destination: '/docs/components/tree',
        permanent: true,
      },
      {
        source: '/navbar',
        destination: '/docs/components/navbar',
        permanent: true,
      },
      {
        source: '/areaChart',
        destination: '/docs/components/areaChart',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
}

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
    remarkPlugins: [tableOfContents],
  },
})
export default withMDX(nextConfig)
