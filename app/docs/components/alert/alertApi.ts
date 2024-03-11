export const alertApiData = [
  {
    id: 1,
    propsName: 'color',
    propsDescription: 'The color variant of the alert.',
    propsType: ['primary', 'secondary', 'success', 'warning', 'error'],
    default: 'primary',
  },
  {
    id: 2,
    propsName: 'dismiss',
    propsDescription: 'Enables or disables the dismiss icon.',
    propsType: 'boolean',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'withBg',
    propsDescription: 'Enables background color.',
    propsType: 'boolean',
    default: 'false',
  },
  {
    id: 4,
    propsName: 'className',
    propsDescription: 'Injects the class name',
    propsType: 'string',
    default: 'None',
  },
]

export const dismissButtonApi = [
  {
    id: 1,
    propsName: 'onClick',
    propsDescription: 'Handler function to be called when the dismiss icon is clicked.',
    propsType: 'function',
    default: '() => void',
  },
  {
    id: 2,
    propsName: 'className',
    propsDescription: 'Injects the class name',
    propsType: 'string',
    default: 'None',
  },
]
