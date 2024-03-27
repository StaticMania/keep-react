export const TypographyAPI = [
  {
    id: 1,
    propsName: 'variant',
    propsType: 'string',
    propsDescription: 'Type of typography variant',
    default: '',
  },
  {
    id: 2,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Style for the typography component',
    default: '',
  },
]

const heading = [
  {
    'font-size': '4rem',
    'line-height': '4.875rem',
    'letter-spacing': '-2.3px',
  },
  {
    'font-size': '3.5rem',
    'line-height': '4.125rem',
    'letter-spacing': '-1.75px',
  },
  {
    'font-size': '3rem',
    'line-height': '3.75rem',
    'letter-spacing': '-1.75px',
  },
  {
    'font-size': '2.5rem',
    'line-height': '3rem',
    'letter-spacing': '-1.5px',
  },
  {
    'font-size': '2rem',
    'line-height': '2.625rem',
    'letter-spacing': '-0.75px',
  },
  {
    'font-size': '1.5rem',
    'line-height': '2.125rem',
    'letter-spacing': '-0.4px',
  },
]

const body = [
  {
    'font-size': '1.25rem',
    'line-height': '1.75rem',
    'letter-spacing': '-0.4px',
  },
  {
    'font-size': '1.125rem',
    'line-height': '1.5rem',
    'letter-spacing': '-0.4px',
  },
  {
    'font-size': '1rem',
    'line-height': '1.5rem',
    'letter-spacing': '-0.3px',
  },
  {
    'font-size': '0.875rem',
    'line-height': '1.375rem',
    'letter-spacing': '-0.2px',
  },
  {
    'font-size': '0.75rem',
    'line-height': '1.375rem',
    'letter-spacing': '-0.2px',
  },
]

const display = [
  {
    'font-size': '6rem',
    'line-height': '6.875rem',
    'letter-spacing': '-2.5px',
  },
]

export const typographyData = {
  heading,
  body,
  display,
}
