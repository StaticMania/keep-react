export const playDataAPI = [
  {
    id: 1,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'The content to be rendered inside the Play component.',
    default: '',
  },
  {
    id: 2,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Additional CSS class to apply to the Play component.',
    default: '',
  },
  {
    id: 3,
    propsName: 'shadowStyle',
    propsType: 'string',
    propsDescription: 'The style of the shadow for the Play component.',
    default: '',
  },
  {
    id: 4,
    propsName: 'size',
    propsType: ['sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'The size of the Play component.',
    default: 'md',
  },
  {
    id: 5,
    propsName: 'color',
    propsType: ['primary', 'secondary', 'success', 'warning', 'error'],
    propsDescription: 'The color scheme of the Play component.',
    default: 'primary',
  },
  {
    id: 6,
    propsName: 'shadow',
    propsType: 'boolean',
    propsDescription: 'Indicates whether to show a shadow for the Play component.',
    default: false,
  },
]
