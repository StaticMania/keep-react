export const modalApi = [
  {
    id: 1,
    propsName: 'isOpen',
    propsType: 'boolean',
    propsDescription: 'Notification show or not.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'onOpenChange',
    propsType: 'setState',
    propsDescription: 'Function to call when the notification is dismissed.',
    default: 'Null',
  },
]
