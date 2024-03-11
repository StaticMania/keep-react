const paginationApiData = [
  {
    id: 1,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'Pagination content',
    default: 'JSX',
  },
  {
    id: 2,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'ClassName for style elements',
    default: 'none',
  },
  {
    id: 3,
    propsName: 'shape',
    propsType: ['rounded', 'circle'],
    propsDescription: 'Shape of the pagination element',
    default: 'rounded',
  },
]

const itemApiData = [
  {
    id: 1,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'Pagination Item content',
    default: 'Page',
  },
  {
    id: 2,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'ClassName for style elements',
    default: 'none',
  },
  {
    id: 3,
    propsName: 'active',
    propsType: 'boolean',
    propsDescription: 'Page is active or not',
    default: 'false',
  },
]

const navigatorApiData = [
  {
    id: 1,
    propsName: 'children',
    propsType: 'ReactNode',
    propsDescription: 'Navigator content',
    default: 'Icon',
  },
  {
    id: 2,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'ClassName for style elements',
    default: 'none',
  },
  {
    id: 3,
    propsName: 'shape',
    propsType: ['rounded', 'circle'],
    propsDescription: 'Shape of the pagination navigator',
    default: 'rounded',
  },
]

export { itemApiData, navigatorApiData, paginationApiData }
