const paginationApiData = [
  {
    id: 1,
    propsName: 'shape',
    propsType: ['rounded', 'circle'],
    propsDescription: 'Shape of the pagination element',
    default: 'rounded',
  },
]

const itemApiData = [
  {
    id: 1,
    propsName: 'active',
    propsType: 'boolean',
    propsDescription: 'Page is active or not',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'asChild',
    propsType: 'boolean',
    propsDescription: 'Component will be rendered as a child',
    default: 'false',
  },
]

const navigatorApiData = [
  {
    id: 1,
    propsName: 'shape',
    propsType: ['rounded', 'circle'],
    propsDescription: 'Shape of the pagination navigator',
    default: 'rounded',
  },
  {
    id: 2,
    propsName: 'asChild',
    propsType: 'boolean',
    propsDescription: 'Component will be rendered as a child',
    default: 'false',
  },
]

export { itemApiData, navigatorApiData, paginationApiData }
