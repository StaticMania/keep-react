export const modalApiData = [
  {
    id: 1,
    propsName: 'onClose',
    propsType: 'function',
    propsDescription: 'Function to be called when the modal is closed.',
    default: '()=>void',
  },

  {
    id: 3,
    propsName: 'show',
    propsType: 'boolean',
    propsDescription: 'Controls the visibility of the modal.',
    default: 'false',
  },
  {
    id: 4,
    propsName: 'icon',
    propsType: 'ReactNode',
    default: 'ReactNode',
    propsDescription: 'Optional icon to be displayed within the modal.',
  },
  {
    id: 5,
    propsName: 'size',
    propsType: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
    default: 'sm',
    propsDescription: 'Defines the size of the modal.',
  },
  {
    id: 6,
    propsName: 'position',
    propsType: ['bottom', 'top', 'left', 'right', 'center'],
    propsDescription: 'Determines the position of the modal on the screen.',
    default: 'center',
  },
]
