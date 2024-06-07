export const tabsApiData = [
  {
    id: 1,
    propsName: 'activeLabel',
    propsType: 'string',
    propsDescription: 'Which tabs by default will be active',
    default: 'one',
  },
  {
    id: 2,
    propsName: 'vertical',
    propsType: 'boolean',
    propsDescription: 'Tabs show vertical position',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'itemType',
    propsType: ['button', 'link'],
    propsDescription: 'Tab item type',
    default: 'button',
  },
]

export const tabsItemApiData = [
  {
    id: 1,
    propsName: 'label',
    propsType: 'string',
    propsDescription: 'This label connect to the content',
    default: 'one',
  },
]
