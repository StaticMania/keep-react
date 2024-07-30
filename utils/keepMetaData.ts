import type { Metadata } from 'next'

// Define default values
export const DEFAULT_URL = 'https://react.keepdesign.io/'
export const DEFAULT_TITLE = 'Keep React - Supercharge your web development'
export const DEFAULT_DESCRIPTION =
  'Explore our library of 40+ open-source React UI components and interactive elements, empowering you to create stunning web projects effortlessly.'
export const DEFAULT_IMAGE_URL =
  'https://images.prismic.io/staticmania/Zo-T9B5LeNNTxBHi_opengraph-image.png?auto=format,compress'

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'Keep React',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
}

const generateKeepMetadata = (
  title?: string,
  description?: string,
  canonicaUrl?: string,
  imageUrl?: string,
): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  }
}

export { defaultMetadata, generateKeepMetadata }
