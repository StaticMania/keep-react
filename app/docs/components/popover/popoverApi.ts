export const popoverAPI = [
  {
    id: 1,
    propsName: 'open',
    propsType: 'boolean',
    propsDescription: 'The controlled open state of the popover.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'onOpenChange',
    propsType: 'setState',
    propsDescription: 'Event handler called when the open state of the popover changes.',
    default: 'null',
  },
]

export const popoverContentAPI = [
  {
    id: 1,
    propsName: 'align',
    propsType: ['start', 'center', 'end'],
    propsDescription: 'The preferred alignment against the anchor.',
    default: 'center',
  },
  {
    id: 2,
    propsName: 'side',
    propsType: ['top', 'right', 'bottom', 'left'],
    propsDescription: 'The preferred side of the anchor to render against when open.',
    default: 'bottom',
  },
  {
    id: 3,
    propsName: 'alignOffset',
    propsType: 'number',
    propsDescription: 'The preferred side of the anchor to render against when open.',
    default: '10',
  },
  {
    id: 4,
    propsName: 'arrowPadding',
    propsType: 'number',
    propsDescription: 'The padding between the arrow and the edges of the content. ',
    default: '0',
  },
]
