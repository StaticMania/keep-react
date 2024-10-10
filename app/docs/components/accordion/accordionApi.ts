export const accordionData = [
  {
    id: 1,
    propsName: 'type',
    propsType: ['single', 'multiple'],
    propsDescription: 'Determines whether one or multiple items can be opened at the same time.',
    default: 'single',
  },
  {
    id: 2,
    propsName: 'flush',
    propsType: 'boolean',
    propsDescription: 'Accordion without outer border and and background color',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'disabled',
    propsType: 'boolean',
    propsDescription: 'Disable interaction with the accordion.',
    default: 'false',
  },
  {
    id: 4,
    propsName: 'collapsible',
    propsType: 'boolean',
    propsDescription: 'When type is "single", allows closing content when clicking trigger for an open item.',
    default: 'true',
  },
  {
    id: 5,
    propsName: 'defaultValue',
    propsType: 'string',
    propsDescription: 'Which panel will be open by default.',
    default: '',
  },
]

export const accordionItemData = [
  {
    id: 1,
    propsName: 'value',
    propsType: 'string',
    propsDescription: 'This value connect to the content',
    default: '',
  },
  {
    id: 2,
    propsName: 'disabled',
    propsType: 'boolean',
    propsDescription: 'Disable interaction with the accordion item.',
    default: 'false',
  },
]
