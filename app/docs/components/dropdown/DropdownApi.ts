export const dropdownAPIData = [
  {
    id: 1,
    propsName: 'defaultOpen',
    propsType: 'boolean',
    propsDescription: 'Default open state of the dropdown menu.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'open',
    propsType: 'boolean',
    propsDescription: 'The controlled open state of the dropdown menu',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'onOpenChange',
    propsType: 'function',
    propsDescription: 'Event handler called when the open state of the dropdown menu changes.',
    default: '(open: boolean) => void',
  },
  {
    id: 4,
    propsName: 'modal',
    propsType: 'boolean',
    propsDescription: 'The modality of the dropdown menu.',
    default: 'false',
  },
]
export const dropdownContentAPIData = [
  {
    id: 1,
    propsName: 'side',
    propsType: ['top', 'right', 'bottom', 'left'],
    propsDescription: 'The preferred side of the trigger to render against when open',
    default: 'bottom',
  },
  {
    id: 2,
    propsName: 'sideOffset',
    propsType: 'number',
    propsDescription: 'The distance in pixels from the trigger.',
    default: '0',
  },
  {
    id: 3,
    propsName: 'align',
    propsType: ['start', 'center', 'end'],
    propsDescription: 'The preferred alignment against the trigger. ',
    default: 'center',
  },
]
