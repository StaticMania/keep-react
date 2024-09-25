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
    propsName: 'onOpenChange',
    propsType: 'Function',
    propsDescription: 'setState function',
    default: 'None',
  },
]
