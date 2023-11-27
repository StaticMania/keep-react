export const redirectButtonApi = [
  {
    id: 1,
    propsName: 'redirectUrl',
    propsType: 'string',
    propsDescription: 'URL to redirect users when a certain action is taken.',
    default: '/home',
  },
  {
    id: 2,
    propsName: 'buttonText',
    propsType: 'string',
    propsDescription: 'Text for the button that triggers a specific action.',
    default: 'Go To Home Page',
  },
  {
    id: 3,
    propsName: 'redirectBtnSize',
    propsType: ['xs', 'sm', 'md', 'lg'],
    propsDescription: 'Redirects button size',
    default: 'md',
  },
  {
    id: 4,
    propsName: 'buttonType',
    propsType: ['primary', 'dashed', 'text', 'linkPrimary', 'linkGray', 'outlineGray', 'outlinePrimary', 'default'],
    propsDescription: 'Redirect Button type',
    default: 'primary',
  },
  {
    id: 5,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Custom class to style the redirect button.',
    default: 'None',
  },
]
