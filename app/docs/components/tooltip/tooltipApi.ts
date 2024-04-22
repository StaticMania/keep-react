export const tooltipDataApi = [
  {
    id: 1,
    propsName: 'placement',
    propsType: [
      'top',
      'bottom',
      'left',
      'right',
      'top-start',
      'top-end',
      'right-start',
      'right-end',
      'bottom-start',
      'bottom-end',
      'left-start',
      'left-end',
    ],
    propsDescription: 'Placement of the tooltip.',
    default: 'top',
  },
  {
    id: 2,
    propsName: 'trigger',
    propsType: ['hover', 'click', 'focus'],
    propsDescription: 'Trigger mode for displaying the tooltip.',
    default: 'hover',
  },
]
