export const drawerAPIData = [
  {
    id: 1,
    propsName: 'isOpen',
    propsType: 'string',
    propsDescription: 'Drawer show or not?',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'position',
    propsType: ['left', 'top', 'right', 'bottom'],
    propsDescription: 'Drawer position',
    default: 'bottom',
  },
  {
    id: 3,
    propsName: 'onClose',
    propsType: 'Function',
    propsDescription: 'Drawer close function',
    default: 'None',
  },
]
