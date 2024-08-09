export const toggleApiData = [
  {
    id: 1,
    propsName: 'showIcon',
    propsType: 'Boolean',
    propsDescription: 'Indicates if an icon should be included with the toggle.',
    default: 'false',
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
