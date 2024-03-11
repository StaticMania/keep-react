export const dividerDataAPI = [
  {
    id: 1,
    propsName: 'color',
    propsType: ['primary', 'secondary', 'success', 'warning', 'error'],
    propsDescription: 'Available color options for the divider.',
    default: 'secondary',
  },
  {
    id: 2,
    propsName: 'size',
    propsType: ['sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'Available sizes options for the divider.',
    default: 'md',
  },
  {
    id: 3,
    propsName: 'variant',
    propsType: ['start', 'end', 'center'],
    propsDescription: 'Available variants for the divider alignment.',
    default: 'center',
  },
  {
    id: 4,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Additional CSS classes to customize the divider appearance.',
    default: '',
  },
  {
    id: 5,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'Content to be placed within the divider, if any.',
    default: '',
  },
]
