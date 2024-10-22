export const tooltipContentApi = [
  {
    id: 1,
    propsName: 'side',
    propsType: ['top', 'bottom', 'left', 'right'],
    propsDescription: 'Placement of the tooltip.',
    default: 'top',
  },
  {
    id: 2,
    propsName: 'align',
    propsType: ['start', 'center', 'end'],
    propsDescription: 'The preferred alignment against the trigger.',
    default: 'center',
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
export const tooltipApi = [
  {
    id: 1,
    propsName: 'open',
    propsType: 'boolean',
    propsDescription: 'The controlled open state of the tooltip.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'onOpenChange',
    propsType: 'setState',
    propsDescription: 'Event handler called when the open state of the tooltip changes.',
    default: 'null',
  },
]
export const tooltipProviderApi = [
  {
    id: 1,
    propsName: 'delayDuration',
    propsType: 'number',
    propsDescription: 'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
    default: '700',
  },
  {
    id: 2,
    propsName: 'skipDelayDuration',
    propsType: 'number',
    propsDescription: 'How much time a user has to enter another trigger without incurring a delay again.',
    default: '300',
  },
]
