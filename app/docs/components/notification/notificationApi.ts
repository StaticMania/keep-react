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
    propsName: 'onOpenChange',
    propsType: 'setState',
    propsDescription: 'Function to call when the notification is dismissed.',
    default: 'Null',
  },
  {
    id: 3,
    propsName: 'position',
    propsType: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'],
    propsDescription: 'Sets the position of the notification.',
    default: 'bottom-right',
  },
  {
    id: 4,
    propsName: 'autoCloseTime',
    propsType: 'number',
    propsDescription: 'Auto close time of the notification.',
    default: '3000',
  },
  {
    id: 5,
    propsName: 'autoClose',
    propsType: 'boolean',
    propsDescription: 'Notification auto close or not.',
    default: 'true',
  },
]
