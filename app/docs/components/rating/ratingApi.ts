export const RatingDataApi = [
  {
    id: 1,
    propsName: 'Size',
    propsType: 'number',
    propsDescription: 'rating icon size in number format',
    default: '30',
  },
  {
    id: 2,
    propsName: 'filledType',
    propsType: ['fill', 'regular', 'duotone', 'bold', 'light', 'thin'],
    propsDescription: 'rating start icon type',
    default: 'fill',
  },
  {
    id: 3,
    propsName: 'starType',
    propsType: ['full', 'half'],
    propsDescription: 'Rating start icon type.',
    default: 'full',
  },
  {
    id: 4,
    propsName: 'percentFilled',
    propsType: 'number',
    propsDescription: 'rating progress number',
    default: '70',
  },
]
