export const carouselDataApi = [
  {
    id: 1,
    propsName: 'slides',
    propsType: 'array',
    propsDescription: 'Carousel items array which to be slide',
    default: '[]',
  },
  {
    id: 2,
    propsName: 'options',
    propsType: 'Object',
    propsDescription: 'Embla carousel options',
    default: '{}',
  },
  {
    id: 3,
    propsName: 'slideClass',
    propsType: 'string',
    propsDescription: 'Customize the slide items by giving custom tailwindcss class',
    default: `''`,
  },
  {
    id: 3,
    propsName: 'carouselPlugins',
    propsType: '[]',
    propsDescription: 'Enblable plugin of Embla carousel like Autoscroll, Parallax, ClassNames etc.',
    default: `[]`,
  },
]
