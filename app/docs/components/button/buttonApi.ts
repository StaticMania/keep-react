export const buttonApiData = [
  {
    id: 1,
    propsName: 'color',
    propsType: ['primary', 'secondary', 'error', 'success', 'warning'],
    propsDescription: 'Color variant of the button',
    default: 'primary',
  },
  {
    id: 2,
    propsName: 'variant',
    propsType: ['link', 'outline'],
    propsDescription: 'Variant of the button.',
    default: 'outline',
  },
  {
    id: 3,
    propsName: 'shape',
    propsType: ['circle', 'icon'],
    propsDescription: 'Apply circular styling to the button.',
    default: 'circle',
  },
  {
    id: 4,
    propsName: 'position',
    propsType: ['start', 'end', 'center'],
    propsDescription: 'Position of the button within a button group.',
    default: 'start',
  },
  {
    id: 5,
    propsName: 'size',
    propsType: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'Size variant of the button.',
    default: 'md',
  },
]
