export const tabsApiData = [
  {
    id: 1,
    propsName: 'defaultActive',
    propsType: 'string',
    propsDescription: 'Which tabs by default will be active',
    default: '',
  },
  {
    id: 2,
    propsName: 'variant',
    propsType: ['default', 'fill', 'underline'],
    propsDescription: 'Tabs item variant',
    default: 'default',
  },
]

export const tabsItemApiData = [
  {
    id: 1,
    propsName: 'value',
    propsType: 'string',
    propsDescription: 'This value connect to the content',
    default: '',
  },
  {
    id: 2,
    propsName: 'contentClassName',
    propsType: 'string',
    propsDescription: 'Content className',
    default: '',
  },
  {
    id: 3,
    propsName: 'bgClassName',
    propsType: 'string',
    propsDescription: 'Content Background className',
    default: '',
  },
]
