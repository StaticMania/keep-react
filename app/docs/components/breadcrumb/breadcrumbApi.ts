export const breadcrumbApiData = [
  {
    id: 1,
    propsName: 'borderType',
    propsType: ['border-xy', 'border-y'],
    propsDescription: 'Icon to be used as a separator between breadcrumb items.',
    default: '<ArrowsLeftRight/>',
  },
  {
    id: 2,
    propsName: 'dividerIcon',
    propsType: 'ReactNode',
    propsDescription: 'An icon element to display within the breadcrumb items.',
    default: 'None',
  },
  {
    id: 3,
    propsName: 'dividerIconStyle',
    propsType: ['slash', 'caret'],
    propsDescription: 'An icon element to display within the breadcrumb items.',
    default: 'caret',
  },
  {
    id: 4,
    propsName: 'icon',
    propsType: 'ReactNode',
    propsDescription: 'Breadcrumb main icon',
    default: 'Home',
  },
  {
    id: 5,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom class to be added to the breadcrumb.',
    default: 'None',
  },
]

export const breadcrumbItemApiData = [
  {
    id: 1,
    propsName: 'href',
    propsType: 'string',
    propsDescription: 'The URL to navigate to when the breadcrumb is clicked.',
    default: '#',
  },
  {
    id: 2,
    propsName: 'activeType',
    propsType: ['border', 'base'],
    propsDescription: 'Defines the active state style for the breadcrumb item.',
    default: 'base',
  },
  {
    id: 3,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom class to be added to the breadcrumb item wrapper.',
    default: 'None',
  },
]
