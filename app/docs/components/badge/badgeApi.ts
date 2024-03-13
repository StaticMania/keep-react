export const badgeApiData = [
  {
    id: 1,
    propsName: 'color',
    propsType: ['primary', 'secondary', 'success', 'warning', 'error'],
    propsDescription: 'Available Badge color.',
    default: 'primary',
  },
  {
    id: 2,
    propsName: 'variant',
    propsType: ['base', 'border', 'background'],
    propsDescription: 'Variant the badge',
    default: 'base',
  },
  {
    id: 3,
    propsName: 'size',
    propsType: ['xs', 'sm'],
    propsDescription: 'Size variant of the badge.',
    default: 'sm',
  },

  {
    id: 4,
    propsName: 'showIcon',
    propsType: 'boolean',
    propsDescription: 'Icon show in badge show or not?',
    default: 'false',
  },
  {
    id: 5,
    propsName: 'iconPosition',
    propsType: ['left', 'right'],
    propsDescription: 'Position of the icon inside the badge.',
    default: 'right',
  },
  {
    id: 6,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom CSS class to be added to the badge.',
    default: 'None',
  },
  {
    id: 7,
    propsName: 'dotStyle',
    propsType: 'string',
    propsDescription: 'Custom style to be added to the badge.',
    default: 'None',
  },
]
