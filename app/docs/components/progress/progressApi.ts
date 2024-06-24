export const LineProgressDataApi = [
  {
    id: 1,
    propsName: 'size',
    propsType: ['sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'Defines the available sizes options for progress.',
    default: 'md',
  },
  {
    id: 2,
    propsName: 'progress',
    propsType: 'number',
    propsDescription: 'Defines the progress control for the progress bar.',
    default: '55',
  },
  {
    id: 3,
    propsName: 'lineBackground',
    propsType: 'string',
    propsDescription: 'Progress line background color',
    default: '',
  },
]

export const circleProgressDataApi = [
  {
    id: 1,
    propsName: 'size',
    propsType: ['sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'Defines the available sizes options for progress.',
    default: 'md',
  },
  {
    id: 2,
    propsName: 'progress',
    propsType: 'number',
    propsDescription: 'Defines the progress control for the progress bar.',
    default: '55',
  },
  {
    id: 3,
    propsName: 'strokeColor',
    propsType: 'string',
    propsDescription: 'Circle Stroke Color',
    default: '',
  },
  {
    id: 4,
    propsName: 'strokeWidth',
    propsType: 'number',
    propsDescription: 'Circle Stroke Width',
    default: '2.5',
  },
]
