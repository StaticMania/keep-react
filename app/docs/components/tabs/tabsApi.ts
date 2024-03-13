export const tabsApiData = [
  {
    id: 1,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'Children is tab items.',
    default: 'Item',
  },
  {
    id: 2,
    propsName: 'activeLabel',
    propsType: 'string',
    propsDescription: 'Which tabs by default will be active',
    default: 'one',
  },
  {
    id: 3,
    propsName: 'vertical',
    propsType: 'boolean',
    propsDescription: 'Tabs show vertical position',
    default: 'false',
  },
  {
    id: 4,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom class name for the component',
    default: '',
  },
]

export const tabsItemApiData = [
  {
    id: 1,
    propsName: 'disabled',
    propsType: 'boolean',
    propsDescription: 'Determines whether the tab item is disabled.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom class name for the component',
    default: '',
  },
  {
    id: 3,
    propsName: 'label',
    propsType: 'string',
    propsDescription: 'This label connect to the content',
    default: 'one',
  },
]
