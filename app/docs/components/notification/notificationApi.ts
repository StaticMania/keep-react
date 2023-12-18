export const notificationApi = [
  {
    id: 1,
    propsName: 'dismiss',
    propsType: 'boolean',
    propsDescription: 'Determines whether the notification can be dismissed.',
    default: 'false',
  },
  {
    id: 2,
    propsName: 'onDismiss',
    propsType: 'boolean | (() => void)',
    propsDescription: 'Function to call when the notification is dismissed.',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'position',
    propsType: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    propsDescription: 'Sets the position of the notification.',
    default: 'top-left',
  },
  {
    id: 4,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom class name for the notification',
    default: 'None',
  },
]
