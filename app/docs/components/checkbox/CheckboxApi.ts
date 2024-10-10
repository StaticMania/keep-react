export const CheckBoxApiData = [
  {
    id: 1,
    propsName: 'variant',
    propsType: ['default', 'rounded', 'circle'],
    propsDescription: 'Checkbox Variant',
    default: 'default',
  },
  {
    id: 5,
    propsName: 'color',
    propsType: ['primary', 'secondary', 'success', 'warning', 'error'],
    propsDescription: 'Checkbox color',
    default: 'primary',
  },
  {
    id: 2,
    propsName: 'defaultChecked',
    propsType: 'boolean',
    propsDescription: 'Checked state of the checkbox',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'checked',
    propsType: 'function',
    propsDescription: 'Checked state of the checkbox',
    default: 'false',
  },
  {
    id: 4,
    propsName: 'onCheckedChange',
    propsType: 'function',
    propsDescription: 'Event handler called when the checked state of the checkbox changes.',
    default: '(value)=>{}',
  },
]
