export const notificationApi = [
  {
    id: 1,
    propsName: 'isOpen',
    propsType: 'boolean',
    propsDescription: 'Notification show or not.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'onClose',
    propsType: '(() => void)',
    propsDescription: 'Function to call when the notification is dismissed.',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'position',
    propsType: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    propsDescription: 'Sets the position of the notification.',
    default: 'bottom-right',
  },
]
