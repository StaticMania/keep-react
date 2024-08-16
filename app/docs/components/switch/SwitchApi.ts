export const toggleApiData = [
  {
    id: 1,
    propsName: 'variant',
    propsType: ['default', 'icon'],
    propsDescription: 'Switch variant',
    default: 'default',
  },
  {
    id: 2,
    propsName: 'disabled',
    propsType: 'Boolean',
    propsDescription: 'Disables interactions with the toggle.',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'onCheckedChange',
    propsType: 'function',
    propsDescription: 'onCheckedChange is called when the toggled',
    default: '(value)=> void',
  },
]
