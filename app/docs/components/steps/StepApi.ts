export const stepPropsAPI = [
  {
    id: 1,
    propsName: 'stepType',
    propsType: ['point', 'icon', 'number'],
    propsDescription: 'Type of step item to display.',
    default: 'point',
  },
  {
    id: 2,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'Optional children elements.',
    default: 'ReactNode',
  },
  {
    id: 3,
    propsName: 'borderType',
    propsType: ['solid', 'dashed', 'none'],
    propsDescription: 'Type of border for the step item.',
    default: 'solid',
  },
]

export const StepItemsAPI = [
  {
    id: 1,
    propsName: 'title',
    propsType: 'string',
    propsDescription: 'Title for the step item.',
    default: 'text',
  },
  {
    id: 2,
    propsName: 'description',
    propsType: 'string',
    propsDescription: 'Description for the step item.',
    default: 'text',
  },
  {
    id: 3,
    propsName: 'numberOfSteps',
    propsType: 'number',
    propsDescription: 'The step number for this item.',
    default: '1',
  },
  {
    id: 4,
    propsName: 'completed',
    propsType: 'boolean',
    propsDescription: 'Indicates if the step is completed.',
    default: 'false',
  },
  {
    id: 5,
    propsName: 'icon',
    propsType: 'ReactNode',
    propsDescription: 'An optional icon element to display.',
    default: 'Icon',
  },
  {
    id: 6,
    propsName: 'active',
    propsType: 'boolean',
    propsDescription: 'Indicates if the step is active.',
    default: 'false',
  },
]
