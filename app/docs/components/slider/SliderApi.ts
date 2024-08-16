export const sliderAPIData = [
  {
    id: 1,
    propsName: 'min',
    propsType: 'number',
    propsDescription: 'Minimum value of the slider.',
    default: '0',
  },
  {
    id: 2,
    propsName: 'max',
    propsType: 'number',
    propsDescription: 'Maximum value of the slider.',
    default: '100',
  },
  {
    id: 3,
    propsName: 'step',
    propsType: 'number',
    propsDescription: 'Step size for each increment on the slider. Can be null.',
    default: 'number',
  },
  {
    id: 4,
    propsName: 'inverted',
    propsType: 'boolean',
    propsDescription: 'Determines if the slider values are shown in reverse.',
    default: 'false',
  },
  {
    id: 5,
    propsName: 'defaultValue',
    propsType: ['number', 'number[]'],
    default: '0',
    propsDescription: 'Initial default value or values for the slider.',
  },
  {
    id: 6,
    propsName: 'onValueChange',
    propsType: 'function',
    propsDescription: 'Callback function when the slider value changes.',
    default: '(value) => void',
  },
]
