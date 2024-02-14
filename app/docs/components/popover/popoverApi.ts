export const popoverAPI = [
  {
    id: 1,
    propsName: 'className',
    propsType: ['string'],
    propsDescription: 'Custom CSS class for styling the popover.',
    default: 'None',
  },
  {
    id: 2,
    propsName: 'placement',
    propsType: [
      'top',
      'top-end',
      'top-start',
      'bottom',
      'bottom-end',
      'bottom-start',
      'left',
      'left-end',
      'left-start',
      'right',
      'right-end',
      'right-start',
    ],
    propsDescription: 'Defines the position of the popover relative to the trigger element.',
    default: 'top',
  },
]
